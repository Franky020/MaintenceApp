import {pool} from '../db.js'
import bcrypt from 'bcrypt'

export const getAdmins = async(req, res) => {
  try {
    const [admins] = await pool.query("SELECT * FROM administradores");
    res.json(admins);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
}

export const getAdmin = async(req, res) => {
 
  try {
    const [admin] = await pool.query
      ("SELECT * FROM administradores WHERE codigo = ?", [req.params.codigo]
      )
    if (admin.length === 0) {
      return res.status(404).json({message: "El codigo de Usuario no existe"})
    }
    res.json(admin[0])
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
 
}

export const createAdmin = async(req, res) => {
  try {
    const {codigo,nombre,apellidopaterno,apellidomaterno,correo,telefono,tipoUsuario,contrasena} = req.body

    const contraseñaEncriptada = await bcrypt.hash(contrasena, 10);

    const user = await pool.query(
       "INSERT INTO administradores (codigo,nombre,apellidopaterno,apellidomaterno,correo,telefono,tipoUsuario,contrasena) VALUES (?,?,?,?,?,?,?,?)",
       [
         codigo,
         nombre,
         apellidopaterno,
         apellidomaterno,
         correo,
         telefono,
         tipoUsuario,
         contraseñaEncriptada
       ]
       );
       res.json({
        codigo,
        nombre,
        apellidopaterno,
        apellidomaterno,
        correo,
        telefono,
        tipoUsuario,
        contraseñaEncriptada
       })
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:error.message});
  }
}

export const updateAdmin = async(req, res) => {
  try {
    const update = await pool.query("UPDATE administradores SET ? WHERE codigo = ?",[
      req.body,
      req.params.codigo,
    ]);
  
    res.json(update);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
};

export const deleteAdmin = async(req, res) => {

  try {
  const [eliminar] = await pool.query("DELETE FROM administradores WHERE codigo = ?",[req.params.codigo]);
  if(eliminar.affectedRows === 0)
    return res.status(404).json({message: "El codigo de Usuario no existe"})
  return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }

};
