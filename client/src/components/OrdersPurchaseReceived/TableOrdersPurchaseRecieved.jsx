import RenderReceived from "./RenderReceived"

export const TableOrdersPurchaseRecieved = () => {
  return (
   
      <div className="container-fluid">
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col" className="text-center">Código</th>
                <th scope="col" className="text-center">Fecha creacion</th>
                <th scope="col" className="text-center">Nombre Articulo</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Estado</th>
                <th scope="col" className="text-center">Orden Compra</th>
                <th scope="col" className="text-center">Orden Entrega</th>
              </tr>
            </thead>
                
            <tbody>
              <RenderReceived/>  
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default TableOrdersPurchaseRecieved