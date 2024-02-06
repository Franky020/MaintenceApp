import { Router } from "express";
import {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin
} from '../controllers/admins.controllers.js';

const router = Router();

router.get('/admins',getAdmins)

router.get('/admins/:codigo', getAdmin)

router.post('/admins',createAdmin)

router.put('/admins/:codigo', updateAdmin)

router.delete('/admins/:codigo', deleteAdmin)

export default router