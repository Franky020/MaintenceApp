import { Router } from "express"
import multer from "multer"
import {
  getReports,
  getReport,
  createReport,
  updateReport,
  deleteReport
} from "../controllers/reports.controllers.js"

const storage = multer.diskStorage({
  destination: (req,file, cb)=> {
    cb(null, "../client/uploads/reports")
  },
  filename: (req,file, cb)=> {
    cb(null, "report-" + Date.now() + "-" + file.originalname)
  },
  limits: {
    fileSize: 1048576 //1 -MB
  },
})
const upload = multer({storage})
const router = Router();
router.get('/reports' , getReports)
router.get('/reports/:codigo', getReport)
router.post('/reports',upload.single("fileReporte"),  createReport)
router.put('/reports/:codigo', updateReport)
router.delete('/reports/:codigo', deleteReport)


export default router
