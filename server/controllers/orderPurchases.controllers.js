import { pool } from "../db.js";
import fs from "fs";

export const getOrdersPurchase = async (req, res) => {
  try {
    const [ordersPurchase] = await pool.query(
      "SELECT codigo,DATE_FORMAT(fechacreacion, '%Y-%m-%d ') AS fechacreacion,nombreproducto,cantidad,unidadmedida,status,observaciones,DATE_FORMAT(fechaentrega, '%Y-%m-%d ') AS fechaentrega,ordencompra,ordenentrega, proveedores_codigo FROM ordenescompra"
    );
    res.json(ordersPurchase);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrderPurchase = async (req, res) => {
  try {
    const [orderPurchase] = await pool.query(
      "SELECT * FROM ordenescompra WHERE codigo = ?",
      [req.params.codigo]
    );
    if (orderPurchase.length === 0) {
      return res
        .status(404)
        .json({ message: "El codigo de Orden de Compra no existe" });
    }
    res.json(orderPurchase[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrderPurchase = async (req, res) => {
  try {
    const {
      codigo,
      nombreproducto,
      cantidad,
      unidadmedida,
      status,
      observaciones,
      fechaentrega,
      proveedores_codigo,
    } = req.body;
    let fileOrdenCompra = "";
    let fileOrdenEntrega = "";
    console.log(req.body);
    console.log("Datos imagen");
    console.log(req.files);
    if (req.files) {
      for (const fileKey in req.files) {
        const file = req.files[fileKey][0];
        const imgSplit = file.originalname.split(".");
        const ext = imgSplit[1];
        if (!["png", "jpg", "jpeg", "pdf"].includes(ext.toLowerCase())) {
          const filepath = file.path;
          fs.unlinkSync(filepath);
          return res.status(400).json({
            status: 400,
            message:
              "Formato de imagen no válido. Solo se permiten PNG, JPG, JPEG y PDF.",
          });
        }
        switch (fileKey) {
          case "fileCompra":
            fileOrdenCompra = file.filename;
            break;
          case "fileEntrega":
            fileOrdenEntrega = file.filename;
            break;
          default:
            break;
        }
      }
    }
    await pool.query(
      "INSERT INTO ordenescompra (codigo,nombreproducto,cantidad,unidadmedida,fechaentrega,status,observaciones,ordencompra,ordenentrega,proveedores_codigo) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        codigo,
        nombreproducto,
        cantidad,
        unidadmedida,
        fechaentrega,
        status,
        observaciones,
        fileOrdenCompra,
        fileOrdenEntrega,
        proveedores_codigo,
      ]
    );

    res.json({
      codigo,
      nombreproducto,
      cantidad,
      unidadmedida,
      fechaentrega,
      status,
      observaciones,
      fileOrdenCompra,
      fileOrdenEntrega,
      proveedores_codigo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrderPurchase = async (req, res) => {
  try {
    const update = await pool.query(
      "UPDATE ordenescompra SET ? WHERE codigo = ?",
      [req.body, req.params.codigo]
    );

    res.json(update);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOrderPurchase = async (req, res) => {
  try {
    const [eliminar] = await pool.query(
      "DELETE FROM ordenescompra where codigo = ?",
      [req.params.codigo]
    );

    if (eliminar.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Código de Orden de Compra no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
