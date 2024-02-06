import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"

export const ProductsCount = () => {
  const{countProducts,loadProducts} = useAdmin()
  useEffect(()=> {
    loadProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return(
    <div className="card-body">
      <p className="card-text">Inventario</p>
      <p className="contador">{countProducts}</p>
    </div>
  )
}

export default ProductsCount