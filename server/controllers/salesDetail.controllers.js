import {pool} from '../db.js'

export const getSalesDetail = async(req, res) => {
  try {
    const [salesDetail] = await pool.query("SELECT * FROM detalleventa");
    res.json(salesDetail);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
}

export const getSaleDetail = async(req, res) => {
 
  try {
    const [saleDetail] = await pool.query
      ("SELECT * FROM detalleventa WHERE ordenesventa_codigo = ?", [req.params.ordenesventa_codigo]
      )
    if (saleDetail.length === 0) {
      return res.status(404).json({message: "El codigo de Detalle de venta no existe no existe"})
    }
    res.json(saleDetail[0])
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
 
}

export const createSaleDetail = async(req, res) => {
  try {
    const {cantidad,ordenesventa_codigo} = req.body
    await pool.query(
       'INSERT INTO detalleventa (cantidad,ordenesventa_codigo) VALUES (?,?)',
       [
        cantidad,
        ordenesventa_codigo
       ]
       );
       res.json({
        cantidad,
        ordenesventa_codigo,
       })
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const updateSaleDetail = async(req, res) => {
  try {
    const update = await pool.query("UPDATE detalleventa SET ? WHERE  ordenesventa_codigo = ?",[
      
      req.body,
      req.params.ordenesventa_codigo,
    ]);
  
    res.json(update);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const deleteSaleDetail = async(req, res) => {
  try {
    const [eliminar] = await pool.query("DELETE FROM detalleventa where ordenesventa_codigo = ?", [
      req.params.ordenesventa_codigo,
    ]);
  
    if(eliminar.affectedRows ===  0)
      return res.status(404).json({message: "Código de Detalle de Venta no encontrado"})
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}