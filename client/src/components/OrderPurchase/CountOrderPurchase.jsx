import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"

export const CountOrderPurchase = () => {
  const {countOrderPurchases,loadOrderPurchases} = useAdmin()
  useEffect(() =>{
    loadOrderPurchases();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="card-body">
      <p className="card-text">Ordenes de Compra</p>
      <p className="contador">{countOrderPurchases}</p>
    </div>
  )
}

export default CountOrderPurchase