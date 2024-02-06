import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"

export const CountCustomers = () => {

  const {countCustomers,loadCustomers} = useAdmin()

  useEffect(()=> {
    loadCustomers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="card-body">
      <p className="card-text">Clientes</p>
      <p className="contador">{countCustomers}</p>
    </div>
  )
}

export default CountCustomers