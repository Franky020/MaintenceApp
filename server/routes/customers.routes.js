import { Router } from "express"
import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customers.controllers.js"

const router = Router()
router.get('/customers', getCustomers)
router.get('/customers/:codigo', getCustomer)
router.post('/customers', createCustomer)
router.put('/customers/:codigo', updateCustomer)
router.delete('/customers/:codigo', deleteCustomer)

export default router