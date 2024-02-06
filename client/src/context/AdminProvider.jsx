import { useState } from "react";
import { AdminContext } from "./AdminContext";
import {
  createUserRequest,
  getUsersRequest,
  getUserRequest,
  updateUserRequest,
  deleteUserRequest,
} from "../api/users.api";
import {
  createAdminRequest,
  getAdminsRequest,
  deleteAdminRequest,
} from "../api/admins.api";

import {
  getSuppliersRequest,
  getSupplierRequest,
  updateSupplierRequest,
  createSupplierRequest,
  deleteSupplierRequest,
} from "../api/suppliers.api";

import {
  getProductsRequest,
  getProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "../api/products.api";
import {
  getOrderSalesRequest,
  getOrderSaleRequest,
  createOrderSaleRequest,
  updateOrderSaleRequest,
  deleteOrderSaleRequest,
} from "../api/orderSales.api";
import {
  getOrdersPurchaseRequest,
  getOrderPurchaseRequest,
  createOrderPurchaseRequest,
  updateOrderPurchaseRequest,
  deleteOrderPurchaseRequest,
} from "../api/orderPuchases.api";
import {
  getReportsRequest,
  getReportRequest,
  createReportRequest,
  updateReportRequest,
  deleteReportRequest,
} from "../api/reports.api";
import {
  getCustomersRequest,
  getCustomerRequest,
  createCustomerRequest,
  updateCustomerRequest,
  deleteCustomerRequest,
} from "../api/customers.api";
// eslint-disable-next-line react/prop-types
export const AdminContextProvider = ({ children }) => {

  const [usersList, setUsersList] = useState([]);
  const [countUsers, setCountUsers] = useState(0);
  const [adminList, setAdminList] = useState([]);
  /*Validacion de codigo y correo */
  const isCodeUnique = (code) => {
    return !usersList.some((user) => user.codigo === code);
  };
  const isEmailUnique = (email) => {
    return !usersList.some((user) => user.correo === email);
  };
  /*crear usuarios */
  const userCreate = async (user) => {
    try {
      if(isCodeUnique(user.codigo) && isEmailUnique(user.correo)){
        const users = await createUserRequest(user);
        setUsersList([...usersList, users.data]);
        alert("El usuario ha sido creado exitosamente");
        if (user.tipoUsuario === "Administrador") {
          await createAdminRequest(user);
        }
      }else {
        alert("El codigo o correo ya se encuentran registrados");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  /*cargar lista de usuarios */

  async function loadUsers() {
    const users = await getUsersRequest();
    const admin = await getAdminsRequest();
    setUsersList(users.data);
    setCountUsers(users.data.length);
    setAdminList(admin.data);
  }
  //cargar un usuario
  const getUser = async (codigo) => {
    try {
      const editUser = await getUserRequest(codigo);
      return editUser.data;
    } catch (error) {
      console.log(error);
    }
  };
  //actualizar un usuario
  const userUpdate = async (codigo, updateFiles) => {
    try {
      const updateU = await updateUserRequest(codigo, updateFiles);

    // Verificar si el correo es único antes de actualizar el usuario
    const isEmailUnique = usersList.every((user) => {
      return user.codigo === updateU.data.codigo || user.correo !== updateU.data.correo;
    });

    if (isEmailUnique) {
      setUsersList(usersList.map((user) => {
        if (user.codigo === updateU.data.codigo) {
          return updateU.data;
        }
        return user;
      }));
      alert("El usuario ha sido actualizado exitosamente.");
    } else {
      alert("Ya existe un usuario con ese correo electrónico");
    }
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el usuario.");
      }
    }
  };
  /*Eliminar Usuarios  */
  const userDelete = async (codigo) => {
    try {
      await deleteUserRequest(codigo);
      setUsersList(usersList.filter((user) => user.codigo !== codigo));
      if (adminList.some((admin) => admin.codigo === codigo)) {
        await deleteAdminRequest(codigo);    
      }
      alert("El usuario ha sido eliminado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };

  //Suppliers
  const [suppliersList, setSuppliersList] = useState([]);
  const [countSuppliers, setCountSuppliers] = useState(0);
  //create Supplier
  const createSupplier = async (supplier) => {
    try {
      const suppliers = await createSupplierRequest(supplier);
      setSuppliersList([...suppliersList, suppliers.data]);
      alert("El proveedor ha sido agregado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };
  //load list of suppliers
  async function loadSuppliers() {
    const suppliers = await getSuppliersRequest();
    setSuppliersList(suppliers.data);
    setCountSuppliers(suppliers.data.length);
  }

  //get supplier for codigo
  const getSupplier = async (codigo) => {
    try {
      const supplier = await getSupplierRequest(codigo);
      return supplier.data;
    } catch (error) {
      console.log(error);
    }
  };
  //update supplier for codigo
  const updateSupplier = async (codigo, updateFiles) => {
    try {
      const supplier = await updateSupplierRequest(codigo, updateFiles);
      setSuppliersList([...suppliersList, supplier.data]);
      alert("El proveedor ha sido actualizado exitosamente");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el proveedor.");
      }
    }
  };
  //delete supplier
  const deleteSupplier = async (codigo) => {
    try {
      await deleteSupplierRequest(codigo);
      setSuppliersList(
        suppliersList.filter((supplier) => supplier.codigo !== codigo)
      );
      alert("Los datos del proveedor han sido eliminados")
    } catch (error) {
      console.log(error);
    }
  };

  //Products

  const [productsList, setProductsList] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  //agregar product
  const createProduct = async (product) => {
    try {
      const products = await createProductRequest(product);
      alert("El Producto ha sido agregado exitosamente");
      setProductsList([...productsList, products.data]);
    } catch (error) {
      console.log(error);
    }
  };
  // load products
  async function loadProducts() {
    const products = await getProductsRequest();
    setProductsList(products.data);
    setCountProducts(products.data.length);
  }

  // load product for codigo
  const getProduct = async (codigo) => {
    try {
      const product = await getProductRequest(codigo);
      return product.data;
    } catch (error) {
      console.log(error);
    }
  };
  // update product
  const updateProduct = async (codigo, updateFiles) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const product = await updateProductRequest(codigo, updateFiles);
      alert("El producto ha sido actualizado");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el producto.");
      }
    }
  };
  //delete product
  const deleteProduct = async (codigo) => {
    try {
      await deleteProductRequest(codigo);
      setProductsList(
        productsList.filter((product) => product.codigo !== codigo)
      );
      alert("El producto ha sido eliminado");
    } catch (error) {
      console.log(error);
    }
  };
  //Orders Sales
  const [orderSalesList, setOrderSalesList] = useState([]);
  const [countOrderSales, setCountOrderSales] = useState(0);
  // create Order Sale
  const createOrderSale = async (orderSale) => {
    try {
      const orderSales = await createOrderSaleRequest(orderSale);
      setOrderSalesList([...orderSalesList, orderSales.data]);
      alert("La orden de venta ha sido agregada");
    } catch (error) {
      console.log(error);
    }
  };
  // load Order Sales

  async function loadOrderSales() {
    const orderSales = await getOrderSalesRequest();
    setOrderSalesList(orderSales.data);
    setCountOrderSales(orderSales.data.length);
  }
  // get Order Sale for codigo
  const getOrderSale = async (codigo) => {
    try {
      const orderSale = await getOrderSaleRequest(codigo);
      return orderSale.data;
    } catch (error) {
      console.log(error);
    }
  };
  // update Order Sale for codigo
  const updateOrderSale = async (codigo, updateFiles) => {
    try {
      const orderSale = await updateOrderSaleRequest(codigo, updateFiles);
      setOrderSalesList([...orderSalesList, orderSale.data]);
      alert("La orden de venta ha sido actualizada");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el pedido de venta.");
      }
    }
  };
  //delete Order Sale
  const deleteOrderSale = async (codigo) => {
    try {
      await deleteOrderSaleRequest(codigo);
      setOrderSalesList(
        orderSalesList.filter((orderSale) => orderSale.codigo !== codigo)
      );
      alert("La orden de venta ha sido eliminada");
    } catch (error) {
      console.log(error);
    }
  };
  //Orders Purchases
  const [orderPurchasesList, setOrderPurchasesList] = useState([]);
  const [countOrderPurchases, setCountOrderPurchases] = useState(0);
  // create Order Purchase
  const createOrderPurchase = async (ordersale) => {
    try {
      const orderPurchases = await createOrderPurchaseRequest(ordersale);
      setOrderPurchasesList([...orderPurchasesList, orderPurchases.data]);
      alert("La orden de compra ha sido agregada");
    } catch (error) {
      console.log(error);
    }
  };
  // load Order Purchases
  const [recievedList, setRecievedList] = useState([]);
  const [countRecieved, setCountRecieved] = useState(0);
  async function loadOrderPurchases() {
    const orderPurchases = await getOrdersPurchaseRequest();
    const filteredOrderPurchases = orderPurchases.data.filter(
      (order) => order.estado !== 0
    );
    setOrderPurchasesList(orderPurchases.data);
    setCountOrderPurchases(orderPurchases.data.length);
    setRecievedList(filteredOrderPurchases);
    setCountRecieved(filteredOrderPurchases.length);
  }
  // get Order Purchase for codigo
  const getOrderPurchase = async (codigo) => {
    try {
      const orderPurchase = await getOrderPurchaseRequest(codigo);
      return orderPurchase.data;
    } catch (error) {
      console.log(error);
    }
  };
  // update Order Purchase for codigo
  const updateOrderPurchase = async (codigo, updateFiles) => {
    try {
      const orderPurchase = await updateOrderPurchaseRequest(
        codigo,
        updateFiles
      );
      setOrderPurchasesList([...orderPurchasesList, orderPurchase.data]);
      alert("La orden de compra ha sido actualizada");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el pedido de compra.");
      }
    }
  };
  //delete Order Purchase
  const deleteOrderPurchase = async (codigo) => {
    try {
      await deleteOrderPurchaseRequest(codigo);
      setOrderPurchasesList(
        orderPurchasesList.filter(
          (orderPurchase) => orderPurchase.codigo !== codigo
        )
      );
      setRecievedList(
        recievedList.filter((order) => order.codigo!== codigo)
      );
      alert("La orden de compra ha sido eliminada");
    } catch (error) {
      console.log(error);
    }
  };
  //Reports
  const [reportList, setReportList] = useState([]);
  const [countReport, setCountReport] = useState(0);
  //create Report
  const createReport = async (report) => {
    try {
      const reports = await createReportRequest(report);
      setReportList([...reportList, reports.data]);
      alert("El reporte ha sido agregado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };
  //load list of reports
  async function loadReports() {
    const reports = await getReportsRequest();
    setReportList(reports.data);
    setCountReport(reports.data.length);
  }
  //get Report for codigo
  const getReport = async (codigo) => {
    try {
      const report = await getReportRequest(codigo);
      return report.data;
    } catch (error) {
      console.log(error);
    }
  };
  //update Report for codigo
  const updateReport = async (codigo, updateFiles) => {
    try {
      const report = await updateReportRequest(codigo, updateFiles);
      setReportList([...reportList, report.data]);
      alert("El reporte ha sido actualizado correctamente");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el reporte.");
      }
    }
  };
  //delete Report
  const deleteReport = async (codigo) => {
    try {
      await deleteReportRequest(codigo);
      setReportList(reportList.filter((report) => report.codigo !== codigo));
      alert("El reporte ha sido eliminado correctamente");
    } catch (error) {
      console.log(error);
    }
  };
  //customers

  const [countCustomers, setCountCustomers] = useState(0);
  const [customersList, setCustomersList] = useState([]);
  //load list of customers
  async function loadCustomers() {
    try {
      const customers = await getCustomersRequest();
      setCustomersList(customers.data);
      setCountCustomers(customers.data.length);
    } catch (error) {
      console.log(error);
    }
  }
  // load customer for codigo
  const getCustomer = async (codigo) => {
    try {
      const customer = await getCustomerRequest(codigo);
      return customer.data;
    } catch (error) {
      console.log(error);
    }
  };
  //create customers
  const createCustomer = async (customer) => {
    try {
      const customers = await createCustomerRequest(customer);
      setCustomersList([...customersList, customers.data]);
      alert("El cliente ha sido agregado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };
  // update customer for codigo
  const updateCustomer = async (codigo, updateFiles) => {
    try {
      const updatedCustomer = await updateCustomerRequest(codigo, updateFiles);
      const updatedList = customersList.map((customer) => {
        if (customer.codigo === codigo) {
          return updatedCustomer.data;
        }
        return customer;
      });
      setCustomersList(updatedList);
      alert("Los datos del cliente han sido actualizados correctamente");
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error);
        alert("El ID del recurso no es válido.");
      } else {
        console.log(error);
        alert("Se ha producido un error al actualizar el cliente.");
      }
    }
  };
  //delete customer for codigo
  const deleteCustomer = async (codigo) => {
    try {
      await deleteCustomerRequest(codigo);
      setCustomersList(
        customersList.filter((customer) => customer.codigo !== codigo)
      );
      alert("Los datos del cliente han sido eliminados correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        usersList,
        loadUsers,
        userDelete,
        countUsers,
        userCreate,
        getUser,
        userUpdate,
        suppliersList,
        loadSuppliers,
        countSuppliers,
        createSupplier,
        deleteSupplier,
        getSupplier,
        updateSupplier,
        productsList,
        loadProducts,
        countProducts,
        createProduct,
        getProduct,
        updateProduct,
        deleteProduct,
        orderSalesList,
        loadOrderSales,
        countOrderSales,
        createOrderSale,
        getOrderSale,
        updateOrderSale,
        deleteOrderSale,
        orderPurchasesList,
        recievedList,
        loadOrderPurchases,
        countOrderPurchases,
        countRecieved,
        createOrderPurchase,
        getOrderPurchase,
        updateOrderPurchase,
        deleteOrderPurchase,
        reportList,
        loadReports,
        countReport,
        createReport,
        getReport,
        updateReport,
        deleteReport,
        customersList,
        loadCustomers,
        countCustomers,
        createCustomer,
        getCustomer,
        updateCustomer,
        deleteCustomer,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
