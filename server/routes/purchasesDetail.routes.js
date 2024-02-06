import { Router } from "express";
import {
  getPurchasesDetail,
  getPurchaseDetail,
  createPurchaseDetail,
  updatePurchaseDetail,
  deletePurchaseDetail
} from "../controllers/purchasesDetail.controllers.js"

const router = Router();

router.get('/purchasesDetails', getPurchasesDetail)
router.get('/purchasesDetails/:ordenescompra_codigo', getPurchaseDetail)
router.post('/purchasesDetails', createPurchaseDetail)
router.put('/purchasesDetails/:ordenescompra_codigo', updatePurchaseDetail)
router.delete('/purchasesDetails/:ordenescompra_codigo', deletePurchaseDetail)

export default router