import { lazy } from "react"
{/* import RenderProducts from "./RenderProducts"*/}
const RenderProducts = lazy(()=> import ('./RenderProducts'))
export const TableProducts = () => {
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center">Código</th>
              <th scope="col" className="text-center">Producto</th>
              <th scope="col" className="text-center">Stock</th>
              <th scope="col" className="text-center">Unidad Medida</th>
              <th scope="col" className="text-center">Precio Compra</th>
              <th scope="col" className="text-center">Precio Venta</th>
              <th scope="col" className="text-center">Total</th>
              <th scope="col" className="text-center">Imagen</th>
              <th scope="col" className="text-center">Acciones</th>
              
            </tr>
          </thead>
          <tbody>
          <RenderProducts/> 
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableProducts