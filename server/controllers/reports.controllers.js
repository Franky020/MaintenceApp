import { pool } from "../db.js";
import fs from "fs";

export const getReports = async (req, res) => {
  try {
    const [reports] = await pool.query(
      "SELECT codigo,DATE_FORMAT(fechacreacion, '%Y-%m-%d ') AS fechacreacion,nombreproyecto,nombreoperadora,direccion,diagnostico,nombrerepresentante,reporte, usuarios_codigo FROM reportes"
    );

    res.json(reports);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReport = async (req, res) => {
  try {
    const [report] = await pool.query(
      "SELECT * FROM reportes WHERE codigo = ?",
      [req.params.codigo]
    );
    if (report.length === 0) {
      return res
        .status(404)
        .json({ message: "El codigo de Reporte no existe" });
    }
    res.json(report[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createReport = async (req, res) => {
  try {
    const {
      nombreProyecto,
      nombreOperadora,
      direccion,
      diagnostico,
      nombreRepresentante,
      usuarios_codigo,
    } = req.body;
    let fileReport = "";
    if (req.file) {
      const imgreporte = req.file.originalname;
      const reportesplit = imgreporte.split(".");
      const ext = reportesplit[1];
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
      fileReport = req.file.filename;
    }

    await pool.query(
      "INSERT INTO reportes (nombreproyecto,nombreoperadora,direccion,diagnostico,nombrerepresentante,reporte,usuarios_codigo) VALUES (?,?,?,?,?,?,?)",
      [
        nombreProyecto,
        nombreOperadora,
        direccion,
        diagnostico,
        nombreRepresentante,
        fileReport,
        usuarios_codigo,
      ]
    );
    res.json({
      nombreProyecto,
      nombreOperadora,
      direccion,
      diagnostico,
      nombreRepresentante,
      fileReport,
      usuarios_codigo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateReport = async (req, res) => {
  try {
    const update = await pool.query("UPDATE reportes SET ? WHERE codigo = ?", [
      req.body,
      req.params.codigo,
    ]);

    res.json(update);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const [eliminar] = await pool.query(
      "DELETE FROM reportes where codigo = ?",
      [req.params.codigo]
    );
    if (eliminar.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Código de Reporte no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
