import express from 'express';
import cors from "cors";
import {PORT} from "./config.js"
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";
import supplierRoutes from "./routes/suppliers.routes.js";
import reportRoutes from "./routes/reports.routes.js";
import productRoutes from "./routes/products.routes.js";
import orderSaleRoutes from "./routes/orderSales.routes.js";
import orderPurchaseRoutes from "./routes/orderPurchases.routes.js";
import customerRoutes from "./routes/customers.routes.js";
import salesDetailRoutes from "./routes/salesDetail.routes.js";
import purchasesDetailRoutes from "./routes/purchasesDetail.routes.js";
import adminRoutes from "./routes/admins.routes.js";
import loginRoute from "./routes/login.routes.js"

const app = express();
app.listen(PORT);
// Middleware
app.use(cors({
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//Rutas
app.use(loginRoute);
app.use(indexRoutes);
app.use(userRoutes);
app.use(supplierRoutes);
app.use(reportRoutes);
app.use(productRoutes);
app.use(orderSaleRoutes);
app.use(orderPurchaseRoutes);
app.use(customerRoutes);
app.use(salesDetailRoutes);
app.use(purchasesDetailRoutes);
app.use(adminRoutes);
