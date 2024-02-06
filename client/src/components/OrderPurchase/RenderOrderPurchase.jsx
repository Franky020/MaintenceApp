import { useAdmin } from "../../context/useAdmin";
import { useEffect } from "react";

export const RenderOrderPurchase = () => {
  const baseURL = "../uploads/orderPurchase/"
  const { orderPurchasesList, loadOrderPurchases,loadProducts,productsList } =
    useAdmin();
  useEffect(() => {
    loadProducts();
    loadOrderPurchases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return orderPurchasesList.map((orderPurchase) => (
    <tr key={orderPurchase.codigo}>
      <td scope="row" className="text-center">
        {orderPurchase.codigo}
      </td>
      <td scope="row" className="text-center">
        {orderPurchase.fechacreacion}
      </td>
      <td scope="row" className="text-center">
      {orderPurchase.nombreproducto
          ? (() => {
              const product = productsList.find(
                (product) => product.codigo === 
                orderPurchase.nombreproducto
              );

              if (product) {
                return `${product.nombre}`;
              } else {
                return "Producto no encontrado";
              }
            })()
          : "Sin información del producto"}
      </td>
      <td scope="row" className="text-center">
        {orderPurchase.unidadmedida}
      </td>
      <td scope="row" className="text-center">
        {orderPurchase.cantidad}
      </td>
      <td scope="row" className="text-center">
        {orderPurchase.status}
      </td>
      <td scope="row" className="text-center">
      <button className="btn btn-secondary"
       onClick={() => {
        if (orderPurchase.ordencompra !== "" && orderPurchase.ordencompra !== null) {
          window.open(`${baseURL}${orderPurchase.ordencompra}`, "_blank");
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
          if (orderPurchase.ordenentrega !== "" && orderPurchase.ordenentrega !== null) {
            window.open(`${baseURL}${orderPurchase.ordenentrega}`, "_blank");
          } else {
            alert("El archivo Orden de Entrega no existe.");
          }
        }}
        >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
      
    </tr>
  ));
};

export default RenderOrderPurchase;
