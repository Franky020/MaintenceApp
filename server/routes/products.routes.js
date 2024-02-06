import { Router } from "express";
import multer from "multer";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/products.controllers.js"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/uploads/products")
  },
  filename: (req,file,cb)=> {
    cb(null,"product-" + Date.now() + "-" +file.originalname)
  },
});

const uploads = multer({storage});
const router = Router()

router.get('/products',getProducts)
router.get('/products/:codigo',getProduct)
router.post('/products',uploads.single('fileProducto'), createProduct)
router.put('/products/:codigo',uploads.single('fileProducto'), updateProduct)
router.delete('/products/:codigo', deleteProduct)



export default router