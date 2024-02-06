import {pool} from '../db.js'
import bcrypt from 'bcrypt'
import fs from "fs"
import path from "path"

export const getUsers = async(req, res) => {
  try {
    const [users] = await pool.query("SELECT * FROM usuarios");
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
}

export const getUser = async(req, res) => {
  try {
    const [user] = await pool.query
      ("SELECT codigo,nombre,apellidopaterno,apellidomaterno,correo,telefono,empresa,telefono,tipoUsuario, contrasena FROM usuarios WHERE codigo = ?", [req.params.codigo]
      )
    if (user.length === 0) {
      return res.status(404).json({message: "El codigo de Usuario no existe"})
    }
    

    res.json(user[0])
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

export const createUser = async(req, res) => {
  try {
    const {codigo,nombre,apellidopaterno,apellidomaterno,correo,telefono,empresa,tipoUsuario,contrasena} = req.body

    const contraseñaEncriptada = await bcrypt.hash(contrasena, 10);

    const user = await pool.query(
       "INSERT INTO usuarios (codigo,nombre,apellidopaterno,apellidomaterno,correo,telefono,empresa,tipoUsuario,contrasena) VALUES (?,?,?,?,?,?,?,?,?)",
       [
         codigo,
         nombre,
         apellidopaterno,
         apellidomaterno,
         correo,
         telefono,
         empresa,
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
        empresa,
        tipoUsuario,
        contrasena,
       })
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:error.message});
  }
}

export const updateUser = async(req, res) => {
  try {
    const update = await pool.query("UPDATE usuarios SET ? WHERE codigo = ?",[
      req.body,
      req.params.codigo,
    ]);
    res.json(update);

  } catch (error) {
    return res.status(500).json({message:error.message});
  }
};

export const deleteUser = async(req, res) => {

  try {
  const [eliminar] = await pool.query("DELETE FROM usuarios WHERE codigo = ?",[req.params.codigo]);
  if(eliminar.affectedRows === 0)
    return res.status(404).json({message: "El codigo de Usuario no existe"})
  return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }

};

export const editUser = async(req,res) => {
  try {
    if(!req.file){
      return res.status(404).send({
        status: 404,
        message:"No se ha seleccionado imagen"
      });
    }
    let img = req.file.originalname
      const imgsplit = img.split("\.");
      const ext = imgsplit[1];
  
      if(ext.toLowerCase() != "png" && ext.toLowerCase() != "jpg" && ext.toLowerCase() != "jpge" && ext.toLowerCase() != "pdf"){
        const filepath = req.file.path;
        const filedelete =fs.unlinkSync(filepath);
        return res.status(400).send({
          status: "Error",
          message: "Extensión del archivo no valida"
        });
      }else {
        /*
          let newrute = req.file.path.replace(/\\/g, '/');
        newrute = newrute.split('server')[1];
        const avatarrute = newrute.slice(1);
        */
        const update = await pool.query("UPDATE usuarios SET avatar = ? WHERE codigo = ?",[
          req.file.path,
          req.params.codigo,
        ]);
        res.json(update);
      }
  } catch (error) {
    console.log(error);
  }
    
}
