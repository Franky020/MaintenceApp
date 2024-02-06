import {pool} from '../db.js'
import bcrypt from 'bcrypt'


export const login = async (req, res) => {
  try {
 
    const {correo, contrasena} = req.body;
    // Validación de campos vacíos
    if (!correo || !contrasena) {
      return res.status(400).json({
        status: 'Error',
        message: 'Correo y contraseña son obligatorios.',
      });
    }
    //buscar usuario
    const [user] = await pool.query(`SELECT * FROM usuarios WHERE correo = ?`, correo);

    if (!user.length) {
      return res.status(401).json({
        status: 'Error',
        message: 'Credenciales inválidas.',
      });
    }
    
    // Validación de contraseña
   
    const isPasswordValid = bcrypt.compareSync(contrasena, user[0].contrasena);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'Error',
        message: 'Credenciales inválidas.',
      });
    }
    //obtener y devolver un Token
    

    // Retorno de información del usuario
   res.json({
    codigo: user[0].codigo,
    nombre: user[0].nombre,
    apellidopaterno: user[0].apellidopaterno,
    apellidomaterno: user[0].apellidomaterno,
    correo: user[0].correo,
    tipoUsuario: user[0].tipoUsuario,
    avatar: user[0].avatar,
   
   })
  
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "Error",
      message: "Error en el servidor."
    });
  }
};