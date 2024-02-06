import { useAdmin } from "../../context/useAdmin";
import { useEffect } from "react";

export const RenderOrderSales = () => {
  const { orderSalesList, loadOrderSales, customersList, loadCustomers } =
    useAdmin();
  const baseURL = "../uploads/orderSales/";
  useEffect(() => {
    loadOrderSales();
    loadCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return orderSalesList.map((orderSale) => (
    <tr key={orderSale.codigo}>
      <td scope="row" className="text-center">
        {orderSale.codigo}
      </td>
      <td scope="row" className="text-center">
        {orderSale.fechacreacion}
      </td>
      <td scope="row" className="text-center">
        {orderSale.clientes_codigo
          ? (() => {
              const customer = customersList.find(
                (customer) => customer.codigo === orderSale.clientes_codigo
              );

              if (customer) {
                return `${customer.nombre} `;
              } else {
                return "Cliente no encontrado";
              }
            })()
          : "Sin información de Cliente"}
      </td>
      <td scope="row" className="text-center">
        {orderSale.direccion}
      </td>
      <td scope="row" className="text-center">
        {orderSale.status}
      </td>
      <td scope="row" className="text-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (orderSale.cotizacion !== "" && orderSale.cotizacion !== null) {
              window.open(`${baseURL}${orderSale.cotizacion}`, "_blank");
            } else {
              alert("El archivo de Cotización no existe.");
            }
          }}
        >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
      <td scope="row" className="text-center">
        <button className="btn btn-secondary"
        onClick={() => {
          if (orderSale.ordencompra !== "" && orderSale.ordencompra !== null) {
            window.open(`${baseURL}${orderSale.ordencompra}`, "_blank");
          } else {
            alert("El archivo Orden de Compra no existe.");
          }
        }}
        >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
      <td scope="row" className="text-center">
        <button className="btn btn-secondary"
        onClick={() => {
          if (orderSale.facturacion !== "" && orderSale.facturacion !== null) {
            window.open(`${baseURL}${orderSale.facturacion}`, "_blank");
          } else {
            alert("La hoja de Facturación no existe.");
          }
        }}
        >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
      <td scope="row" className="center-icon">
        <div className="btn-group" role="group">
          <button className="btn btn-secondary"
          onClick={() => {
            if (orderSale.acuseentrega !== "" && orderSale.acuseentrega !== null) {
              window.open(`${baseURL}${orderSale.acuseentrega}`, "_blank");
            } else {
              alert("El acuse de Entrega no existe.");
            }
          }}
          >
            <img src="../src/assets/visibility.svg" alt="ver" />
          </button>
        </div>
      </td>
    </tr>
  ));
};

export default RenderOrderSales;
