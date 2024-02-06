import {pool} from '../db.js'

export const getPurchasesDetail = async(req, res) => {
  try {
    const [purchasesDetail] = await pool.query("SELECT * FROM detallecompra");
    res.json(purchasesDetail);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
}

export const getPurchaseDetail = async(req, res) => {
 
  try {
    const [purchaseDetail] = await pool.query
      ("SELECT * FROM detallecompra WHERE ordenescompra_codigo = ?", [req.params.ordenescompra_codigo]
      )
    if (purchaseDetail.length === 0) {
      return res.status(404).json({message: "El codigo de  Detalle de Compra no existe"})
    }
    res.json(purchaseDetail[0])
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
 
}

export const createPurchaseDetail = async(req, res) => {
  try {
    const {cantidad,ordenescompra_codigo} = req.body
    await pool.query(
       'INSERT INTO detallecompra (cantidad,ordenescompra_codigo) VALUES (?,?)',
       [
        cantidad,
        ordenescompra_codigo
       ]
       );
       res.json({
        cantidad,
        ordenescompra_codigo,
       })
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const updatePurchaseDetail = async(req, res) => {
  try {
    const update = await pool.query("UPDATE detallecompra SET ? WHERE ordenescompra_codigo = ?",[
      req.body,
      req.params.ordenescompra_codigo,
    ]);
  
    res.json(update);
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const deletePurchaseDetail = async(req, res) => {
  try {
    const [eliminar] = await pool.query("DELETE FROM detallecompra where ordenescompra_codigo = ?", [req.params.ordenescompra_codigo,
    ]);
  
    if(eliminar.affectedRows ===  0)
      return res.status(404).json({message: "Código de Orden de Compra no encontrado"})
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}
