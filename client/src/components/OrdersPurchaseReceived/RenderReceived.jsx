import { useAdmin } from "../../context/useAdmin";
import { useEffect } from "react";

export const RenderReceived = () => {
  const { recievedList, loadOrderPurchases } = useAdmin();
  useEffect(() => {
    loadOrderPurchases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const baseURL = "../uploads/orderPurchase/"
  return recievedList.map((recieved) => (
    <tr key={recieved.codigo}>
      <td scope="row" className="text-center">
        {recieved.codigo}
      </td>
      <td scope="row" className="text-center">
        {recieved.fechacreacion}
      </td>
      <td scope="row" className="text-center">
        {recieved.nombreproducto}
      </td>
      <td scope="row" className="text-center">
        {recieved.cantidad}
      </td>
      <td scope="row" className="text-center">
        {recieved.estado !== 0 ? "Recibido" : "Pendiente"}
      </td>
      <td scope="row" className="center-icon">
      <button className="btn btn-secondary"
       onClick={() => {
        if (recieved.ordencompra !== "") {
          window.open(`${baseURL}${recieved.ordencompra}`, "_blank");
        } else {
          alert("La imagen no existe.");
        }
      }}
      >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
      <td scope="row" className="center-icon">
      <button className="btn btn-secondary"
       onClick={() => {
        if (recieved.ordenentrega !== "") {
          window.open(`${baseURL}${recieved.ordenentrega}`, "_blank");
        } else {
          alert("La imagen no existe.");
        }
      }}
      >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
    </tr>
  ));
};

export default RenderReceived;
