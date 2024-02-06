import { useEffect } from "react";
import { useAdmin } from "../../context/useAdmin";
import { useNavigate } from "react-router-dom";
export const RenderProducts = () => {
  const navigate = useNavigate();
  const { productsList, deleteProduct, loadProducts } = useAdmin();
  const baseURL = '../uploads/products/';
  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return productsList.map((product) => (
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
        {product.unidadmedida}
      </td>
      <td scope="row" className="text-center">
        {product.preciocompra}
      </td>
      <td scope="row" className="text-center">
        {product.precioventa}
      </td>
      <td scope="row" className="text-center">
        {product.preciocompra * product.stock}
      </td>
      <td scope="row" className="text-center">
       <img className="imgRender" src={`${baseURL}${product.imagen}`}  alt="imgProducto" />
      </td>
      <td scope="row" className="center-icon">
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => navigate(`/editProduct/${product.codigo}`)}
          >
            <img src="../src/assets/bxs-edit.svg" alt="editar" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProduct(product.codigo)}
          >
            <img src="../src/assets/bx-trash-alt.svg" alt="eliminar" />
          </button>
        </div>
      </td>
    </tr>
  ));
};

export default RenderProducts;
