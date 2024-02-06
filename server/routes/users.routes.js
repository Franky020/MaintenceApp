import { Router } from "express";
import multer from "multer"
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  editUser,
} from '../controllers/users.controllers.js' 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/uploads/avatar")
  },
  filename: (req,file,cb)=> {
    cb(null,"avatar-" + Date.now() + "-" +file.originalname)
  },
  limits:{
    fileSize: 1048576,
  },
});
const uploads = multer({storage});
const router = Router();

router.get('/users', getUsers)
router.get('/users/:codigo', getUser)
router.post('/users',createUser)
router.post('/upload/:codigo',uploads.single("avatar"), editUser)
router.put('/users/:codigo', updateUser)
router.delete('/users/:codigo', deleteUser)

export default router