import { Router } from "express";
import {
  getSalesDetail,
  getSaleDetail,
  createSaleDetail,
  updateSaleDetail,
  deleteSaleDetail
} from "../controllers/salesDetail.controllers.js";

const router = Router();

router.get('/salesDetails', getSalesDetail)
router.get('/salesDetails/:ordenesventa_codigo', getSaleDetail)
router.post('/salesDetails', createSaleDetail)
router.put('/salesDetails/:ordenesventa_codigo', updateSaleDetail)
router.delete('/salesDetails/:ordenesventa_codigo', deleteSaleDetail)

export default router