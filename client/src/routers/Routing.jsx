import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLogin } from "../context/useLogin";

{
  /*Rutas lazy Administrador */
}
const HomeAdmin = lazy(() => import("../pages/HomeAdmin"));
const OrderPurchase = lazy(() => import("../pages/OrderPurchase"));
const OrdersPurchaseRecieved = lazy(() =>
  import("../pages/OrdersPurchaseRecieved")
);
const Products = lazy(() => import("../pages/Products"));
const Reports = lazy(() => import("../pages/Reports"));
const OrderSales = lazy(() => import("../pages/OrderSales"));
const Suppliers = lazy(() => import("../pages/Suppliers"));
const Customers = lazy(() => import("../pages/Customers"));
const Users = lazy(() => import("../pages/Users"));
const Login = lazy(() => import("../components/Login/Login"));
const HomePublic = lazy(() => import("../pages/HomePublic"));
const NotFound = lazy(() => import("../pages/NotFound"));
const AdminContextProvider = lazy(() => import("../context/AdminProvider"));

const ProtectedRoutes = lazy(() => import("../components/ProtectedRoutes"));
{
  /*Rutas lazy Tecnico */
}
const HomeUser = lazy(() => import("../pages/HomeUser"));
const ViewProductsUser = lazy(() => import("../pages/ViewProductsUser"));
{
  /*Rutas lazy Ventas */
}

const HomeVentas = lazy(() => import("../pages/HomeVentas"));
const SalesOrder = lazy(() => import("../pages/SalesOrder"));
const SalesCustomers = lazy(() => import("../pages/SalesCustomers"));

{
  /*Rutas lazy Almacen */
}
const HomeAlmacen = lazy(() => import("../pages/HomeAlmacen"));
const StoreProducts = lazy(() => import("../pages/StoreProducts"));
const StoreOrder = lazy(() => import("../pages/StoreOrder"));
const StoreSuppliers = lazy(() => import("../pages/StoreSuppliers"));

export const Routing = () => {
  const { user, setUser } = useLogin();

  useEffect(() => {
    const loadData = async () => {
      if (window.localStorage.getItem("login")) {
        const sesion = window.localStorage.getItem("login");
        if (sesion) {
          const usuario = JSON.parse(sesion);
          setUser(usuario.data);
        }
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUser]);
  let home = "/";
  if (user !== undefined && user !== null) {
    if (user.tipoUsuario === "Administrador") home = "/homeAdmin";
    if (user.tipoUsuario === "Tecnico") home = "/homeTecnico";
    if (user.tipoUsuario === "Ventas") home = "/homeVentas";
    if (user.tipoUsuario === "Almacen") home = "/homeAlmacen";
  }
  return (
    <Suspense>
      <AdminContextProvider>
        <BrowserRouter>
          <Routes>
            {/*Ruta publica */}
            <Route path="/" element={<HomePublic />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
            {/*Rutas de administrador */}
            <Route
              element={
                <ProtectedRoutes
                  isAllowed={!!user && user.tipoUsuario === "Administrador"}
                  redirecTo="/"
                />
              }
            >
              <Route path="/homeAdmin" element={<HomeAdmin />} />
              <Route path="/compras" element={<OrderPurchase />} />
              <Route path="/recibidos" element={<OrdersPurchaseRecieved />} />
              <Route path="/inventario" element={<Products />} />
              <Route path="editProduct/:codigo" element={<Products />} />
              <Route path="/reportes" element={<Reports />} />
              <Route path="/ventas" element={<OrderSales />} />
              <Route path="/proveedores" element={<Suppliers />} />
              <Route path="editSupplier/:codigo" element={<Suppliers />} />
              <Route path="/clientes" element={<Customers />} />
              <Route path="editCustomer/:codigo" element={<Customers />} />
              <Route path="/usuarios" element={<Users />} />
              <Route path="/editUser/:codigo" element={<Users />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/*Rutas Usuario */}
            <Route
              element={
                <ProtectedRoutes
                  isAllowed={!!user && user.tipoUsuario === "Tecnico"}
                  redirecTo={home}
                />
              }
            >
              <Route path="/homeUser" element={<HomeUser />} />
              <Route path="editReport/:codigo" element={<HomeUser />} />
              <Route path="/viewProducts" element={<ViewProductsUser />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/*Ruta ventas */}

            <Route
              element={
                <ProtectedRoutes
                  isAllowed={!!user && user.tipoUsuario === "Ventas"}
                  redirecTo={home}
                />
              }
            >
              <Route path="/homeVentas" element={<HomeVentas />} />
              <Route path="/venta" element={<SalesOrder />} />
              <Route path="/cliente" element={<SalesCustomers />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/*Ruta Almacen */}
            <Route
              element={
                <ProtectedRoutes
                  isAllowed={!!user && user.tipoUsuario === "Almacen"}
                  redirecTo={home}
                />
              }
            >
              <Route path="/homeAlmacen" element={<HomeAlmacen />} />
              <Route path="/Stock" element={<StoreProducts />} />
              <Route path="/StoreOrder" element={<StoreOrder />} />
              <Route path="/SupplierStore" element={<StoreSuppliers />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AdminContextProvider>
    </Suspense>
  );
};
export default Routing;
