import { pool } from "../db.js";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const [products] = await pool.query("SELECT * FROM productos");
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [product] = await pool.query(
      "SELECT * FROM productos WHERE codigo = ?",
      [req.params.codigo]
    );
    
    if (product.length === 0) {
      return res
        .status(404)
        .json({ message: "El codigo de Producto no existe" });
    }
    res.json(product[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      codigo,
      nombre,
      descripcion,
      unidadmedida,
      preciocompra,
      precioventa,
      stock,
    } = req.body;

     
    let img = "";

    if (req.file) {
      const imgproduct = req.file.originalname;
      const productsplit = imgproduct.split(".");
      const ext = productsplit[1];
      img = req.file.filename;
      if (
        ext.toLowerCase() !== "png" &&
        ext.toLowerCase() !== "jpg" &&
        ext.toLowerCase() !== "jpeg" &&
        ext.toLowerCase() !== "pdf"
      ) {
        const filepath = req.file.path;
        fs.unlinkSync(filepath);
        return res.status(400).json({
          status: 400,
          message:
            "Formato de imagen no válido. Solo se permiten PNG, JPG, JPEG y PDF.",
        });
      }
    }
   
    console.log(img);

    const queryValues = [
      codigo,
      nombre,
      descripcion,
      preciocompra,
      precioventa,
      stock,
      unidadmedida,
      img,
    ];
    const queryString = req.file
      ? "INSERT INTO productos (codigo, nombre, descripcion, preciocompra, precioventa, stock, unidadmedida, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
      : "INSERT INTO productos (codigo, nombre, descripcion, preciocompra, precioventa, stock, unidadmedida) VALUES (?, ?, ?, ?, ?, ?, ?)";

    await pool.query(queryString, queryValues);
    res.json({
      codigo,
      nombre,
      descripcion,
      preciocompra,
      precioventa,
      stock,
      unidadmedida,
      imagen: img,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let imagen= "";
    if (req.file.filename) {
      let imgactualizada = req.file.originalname;
      const imgsplit = imgactualizada.split("\.");
      const ext = imgsplit[1];
      if (
        ext.toLowerCase() != "png" &&
        ext.toLowerCase() != "jpg" &&
        ext.toLowerCase() != "jpeg" &&
        ext.toLowerCase() != "pdf"
      ) {
        const filepath = req.file.path;
        const productdelete = fs.unlinkSync(filepath);
      }
      let newrute = req.file.path.replace(/\\/g, '/');
      img = newrute;
      
      await pool.query("UPDATE productos SET ? WHERE codigo = ?", [
        req.body,
        req.params.codigo,
      ]);
      
    } else {
      await pool.query("UPDATE productos SET ? WHERE codigo = ?", [
        req.body,
        req.params.codigo,
      ]);
    }

    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [eliminar] = await pool.query(
      "DELETE FROM productos where codigo = ?",
      [req.params.codigo]
    );

    if (eliminar.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Código de Producto no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
