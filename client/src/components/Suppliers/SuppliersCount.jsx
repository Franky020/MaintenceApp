import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"
export const SuppliersCount = () => {
  const {countSuppliers,loadSuppliers} = useAdmin()
  useEffect(()=> {
      loadSuppliers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (  
    <div className="card-body">
      <p className="card-text">Proveedores</p>
      <p className="contador">{countSuppliers}</p>
    </div>
  )
}

export default SuppliersCount