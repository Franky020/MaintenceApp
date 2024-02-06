import { Router } from "express";
import multer from "multer";
import {
  getOrdersPurchase,
  getOrderPurchase,
  createOrderPurchase,
  updateOrderPurchase,
  deleteOrderPurchase
} from "../controllers/orderPurchases.controllers.js"

const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, "../client/uploads/orderPurchase")
  },
  filename: (req, file, cb)=> {
    cb(null, "orderPurchase-" + Date.now() + "-"+ file.originalname)
  },
  limits: {
    fileSize: 1048576,
  },
});
const upload = multer({storage});

const router= Router();

router.get('/orderPurchases', getOrdersPurchase)
router.get('/orderPurchases/:codigo', getOrderPurchase)
router.post('/orderPurchases',upload.fields([
  {name: 'fileCompra', maxCount: 1},
  {name: 'fileEntrega', maxCount: 1},
]), createOrderPurchase)
router.put('/orderPurchases/:codigo', updateOrderPurchase)
router.delete('/orderPurchases/:codigo', deleteOrderPurchase)

export default router