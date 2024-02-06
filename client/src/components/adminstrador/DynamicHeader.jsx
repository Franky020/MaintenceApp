import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export const DynamicHeader = () => {
  const location = useLocation();
  const [Message, setHeaderMessage] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderMessage("Bienvenido a JAMX");
        break;
      case "/login":
        setHeaderMessage("Bienvenido a JAMX");
        break;
      case "/homeAlmacen":
        setHeaderMessage("Bienvenido al Panel de Administración de Almacen");
        break;
      case "/StoreOrder":
        setHeaderMessage("Administración de Ordenes de Compra");
        break;
      case "/Stock":
        setHeaderMessage("Administración de Inventario");
        break;
      case "/SupplierStore":
        setHeaderMessage("Gestión de Proveedores");
        break;
      case "/homeVentas":
        setHeaderMessage("Bienvenido al Panel de Administración de Ventas");
        break;
      case "/venta":
        setHeaderMessage("Panel de Ventas");
        break;
      case "/cliente":
        setHeaderMessage("Gestión de Clientes");
        break;
      case "/homeUser":
        setHeaderMessage("Bienvenido Técnico de JAMX");
        break;
      case "/homeAdmin":
        setHeaderMessage("Panel de Administración");
        break;
      case "/compras":
        setHeaderMessage("Ordenes de Compra");
        break;
      case "/recibidos":
        setHeaderMessage("Ordenes de Compra Recibidos");
        break;
      case "/inventario":
        setHeaderMessage("Inventario de Productos");
        break;
      case "/reportes":
        setHeaderMessage("Administración de Reportes");
        break;
      case "/ventas":
        setHeaderMessage("Panel de Ventas");
        break;
      case "/proveedores":
        setHeaderMessage("Gestión de Proveedores");
        break;
      case "/clientes":
        setHeaderMessage("Gestión de Clientes");
        break;
      case "/usuarios":
        setHeaderMessage("Gestión de Usuarios");
        break;
      case "/viewProducts":
        setHeaderMessage("Lista de Productos disponibles");
        break;
      default:
        setHeaderMessage("");
        break;
    }
  }, [location]);

  return Message;
};

export default DynamicHeader;
