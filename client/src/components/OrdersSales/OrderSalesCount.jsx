import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"

export const OrderSalesCount = () => {
  const {countOrderSales,loadOrderSales} = useAdmin()
  useEffect(() =>{
    loadOrderSales();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="card-body">
      <p className="card-text">Ordenes de Venta</p>
      <p className="contador">{countOrderSales}</p>
    </div>
  )
}

export default OrderSalesCount