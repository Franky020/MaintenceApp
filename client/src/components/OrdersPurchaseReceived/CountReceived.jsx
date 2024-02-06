import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"

export const CountReceived = () => {
  const {countRecieved,loadOrderPurchases} = useAdmin()
  useEffect(() =>{
    loadOrderPurchases();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="card-body">
      <p className="card-text">Recibidos</p>
      <p className="contador">{countRecieved}</p>
    </div>
  )
}

export default CountReceived