import { pool } from "../db.js";
import fs from "fs";

export const getOrdersSales = async (req, res) => {
  try {
    const [orderSales] = await pool.query(
      "SELECT codigo,DATE_FORMAT(fechacreacion, '%Y-%m-%d %H:%i:%s') AS fechacreacion,direccion,correo,telefono,status,cotizacion,ordencompra,facturacion,acuseentrega,clientes_codigo FROM ordenesventa"
    );
    res.json(orderSales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrderSale = async (req, res) => {
  try {
    const [orderSale] = await pool.query(
      "SELECT * FROM ordenesventa WHERE codigo = ?",
      [req.params.codigo]
    );
    if (orderSale.length === 0) {
      return res
        .status(404)
        .json({ message: "El codigo de Orden de Venta no existe" });
    }
    res.json(orderSale[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrderSale = async (req, res) => {
  try {
    const { codigo, clientes_codigo, direccion, correo, status, telefono } =
      req.body;
    console.log(req.body);
    console.log(req.files);
    let fileCotizacion = "";
    let fileOrdenCompra = "";
    let fileFactura = "";
    let fileAcuse = "";
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
          case "fileCotizacion":
           fileCotizacion = file.filename;
            break;
          case "fileOrdenCompra":
            fileOrdenCompra = file.filename;
            break;
          case "fileFactura":
            fileFactura = file.filename;
            break;
          case "fileAcuse":
            fileAcuse = file.filename;
            break;
          default:
            break;
        }
      }
    }
    //file Cotizacion
    console.log(fileCotizacion)
    console.log(fileOrdenCompra)
    console.log(fileFactura)
    console.log(fileAcuse)
    //file OrdenCompra
   
    await pool.query(
      "INSERT INTO ordenesventa (codigo,direccion,correo,telefono,status,cotizacion,ordencompra,facturacion,acuseentrega, clientes_codigo) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)",
      [
        codigo,
        direccion,
        correo,
        telefono,
        status,
        fileCotizacion,
        fileOrdenCompra,
        fileFactura,
        fileAcuse,
        clientes_codigo,
      ]
    );
    res.json({
      codigo,
      direccion,
      correo,
      telefono,
      status,
      fileCotizacion,
      fileOrdenCompra,
      fileFactura,
      fileAcuse,
      clientes_codigo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
  
};

export const updateOrderSale = async (req, res) => {
  try {
    const update = await pool.query(
      "UPDATE ordenesventa SET status WHERE codigo = ?",
      [req.body, req.params.codigo]
    );

    res.json(update);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOrderSale = async (req, res) => {
  try {
    const [eliminar] = await pool.query(
      "DELETE FROM ordenesventa where codigo = ?",
      [req.params.codigo]
    );

    if (eliminar.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Código de Orden de Venta no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
