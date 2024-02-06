import {pool} from '../db.js'

export const getCustomers = async(req, res) => {
  try {
    const [customers] = await pool.query("SELECT * FROM clientes");
    res.json(customers);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
}

export const getCustomer = async(req, res) => {
  try {
    const [customer] = await pool.query
      ("SELECT * FROM clientes WHERE codigo = ?", [req.params.codigo]
      )
    if (customer.length === 0) {
      return res.status(404).json({message: "El codigo de Cliente no existe"})
    }
    res.json(customer[0])
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
 
}

export const createCustomer = async(req, res) => {
  try {
    const {codigo,nombre,sucursal,contacto,direccion,correo,telefono} = req.body
        await pool.query(
       'INSERT INTO clientes (codigo,nombre,sucursal,contacto,direccion,correo,telefono) VALUES (?,?,?,?,?,?,?)',
       [
         codigo,
         nombre,
         sucursal,
         contacto,
         direccion,
         correo,
         telefono
       ]
       );
       res.json({
        codigo,
        nombre,
        sucursal,
        contacto,
        direccion,
        correo,
        telefono,
       })
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const updateCustomer = async(req, res) => {
  try {
    const update = await pool.query("UPDATE clientes SET ? WHERE codigo = ?",[
      req.body,
      req.params.codigo,
    ]);
    res.json(update);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const deleteCustomer = async(req, res) => {
  try {
    const [eliminar] = await pool.query("DELETE FROM clientes where codigo = ?", [req.params.codigo,
    ]);
  
    if(eliminar.affectedRows ===  0)
      return res.status(404).json({message: "Código de Cliente no encontrado"})
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}
