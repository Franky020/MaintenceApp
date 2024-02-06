import { useEffect } from "react";
import { useAdmin } from "../../context/useAdmin";

export const ViewProducts = () => {
  const { productsList, loadProducts } = useAdmin();
  useEffect(() => {
    loadProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const baseURL = '../uploads/products/';
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Código
              </th>
              <th scope="col" className="text-center">
                Producto
              </th>
              <th scope="col" className="text-center">
                Stock
              </th>
              <th scope="col" className="text-center">
                Precio Venta
              </th>
              <th scope="col" className="text-center">
                Imagen
              </th>
            </tr>
          </thead>
          <tbody>
            {
            productsList.map((product) => (
              <tr key={product.codigo}>
                <td scope="row" className="text-center">
                  {product.codigo}
                </td>
                <td scope="row" className="text-center">
                  {product.nombre}
                </td>
                <td scope="row" className="text-center">
                  {product.stock}
                </td>
                <td scope="row" className="text-center">
                  {product.precioventa}
                </td>
                <td scope="row" className="text-center">
                <img className="imgRender" src={`${baseURL}${product.imagen}`}  alt="imgProducto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProducts;
