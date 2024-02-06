import { Router } from "express";
import {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier
} from "../controllers/suppliers.controllers.js" 
const router = Router();

router.get('/suppliers', getSuppliers)
router.get('/suppliers/:codigo', getSupplier)
router.post('/suppliers', createSupplier)
router.put('/suppliers/:codigo', updateSupplier)
router.delete('/suppliers/:codigo', deleteSupplier)

export default router