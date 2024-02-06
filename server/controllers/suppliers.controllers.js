import {pool} from '../db.js'

export const getSuppliers = async(req, res) => {
  try {
    const [suppliers] = await pool.query("SELECT * FROM proveedores");
    res.json(suppliers);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
}

export const getSupplier = async(req, res) => {
  try {
    const [supplier] = await pool.query
      ("SELECT * FROM proveedores WHERE codigo = ?", [req.params.codigo]
      )
    if (supplier.length === 0) {
      return res.status(404).json({message: "El codigo de Proveedor no existe"})
    }
    res.json(supplier[0])
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

export const createSupplier = async(req, res) => {
  try {
    const {codigo,nombreproveedor,nombrecontacto,direccion,telefono,correo,observaciones} = req.body
    await pool.query(
       "INSERT INTO proveedores (codigo,nombreproveedor,nombrecontacto,direccion,telefono,correo,observaciones) VALUES (?,?,?,?,?,?,?)",
       [
         codigo,
         nombreproveedor,
         nombrecontacto,
         direccion,
         telefono,
         correo,
         observaciones         
       ]
       );
       res.json({
        codigo,
        nombreproveedor,
        nombrecontacto,
        direccion,
        telefono,
        correo,
        observaciones,
       })
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const updateSupplier = async(req, res) => {
  try {
    const update = await pool.query("UPDATE proveedores SET ? WHERE codigo = ?",[
      req.body,
      req.params.codigo,
    ]);
  
    res.json(update);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const deleteSupplier = async(req, res) => {
  try {

    const [eliminar] = await pool.query("DELETE FROM proveedores WHERE codigo = ?",[req.params.codigo]);
    if(eliminar.affectedRows=== 0)
      return res.status(404).json({message:"El codigo de Proveedor no existe"});
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
  
}
