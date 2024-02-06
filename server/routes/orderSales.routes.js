import { Router } from "express";
import multer from "multer";
import {
  getOrdersSales,
  getOrderSale,
  createOrderSale,
  updateOrderSale,
  deleteOrderSale
} from "../controllers/orderSales.controllers.js"

const storage = multer.diskStorage({
  destination: (req,file, cb)=> {
    cb(null, "../client/uploads/orderSales")
  },
  filename: (req,file, cb)=> {
    cb(null, "orderSale-" + Date.now() + "-"+ file.originalname)
  },
  limits: {
    fileSize: 1048576,
  },
});
const upload = multer({storage});

const router = Router();
router.post('/orderSales', upload.fields(
  [
  {name: 'fileCotizacion', maxCount: 1},
  {name: 'fileOrdenCompra', maxCount: 1},
  {name: 'fileFactura', maxCount: 1},
  {name: 'fileAcuse', maxCount: 1}
  ]), createOrderSale)
router.get('/orderSales', getOrdersSales)
router.get('/orderSales/:codigo', getOrderSale)

router.put('/orderSales/:codigo', updateOrderSale)
router.delete('/orderSales/:codigo', deleteOrderSale)

export default router