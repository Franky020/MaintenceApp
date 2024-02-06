import axios from 'axios'

export const createProductRequest = async(product) =>
  await axios.post("http://localhost:4000/products", product,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  

export const getProductsRequest = async()  => 
   await axios.get("http://localhost:4000/products");

export const getProductRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/products/${codigo}`);

export const deleteProductRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/products/${codigo}`);

export const updateProductRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/products/${codigo}`,update,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
   });

   /*
export const createProductRequest = async (product) => {
   try {
     const form = new FormData();
 
     // Añadir campos del formulario al objeto FormData
     form.append('codigo', product.codigo);
     form.append('nombre', product.nombre);
     form.append('descripcion', product.descripcion);
     form.append('unidadmedida', product.unidadmedida);
     form.append('preciocompra', product.preciocompra);
     form.append('precioventa', product.precioventa);
     form.append('stock', product.stock);
     form.append('fileProducto', product.fileProducto); // Asegúrate de tener acceso al objeto File
 
     const response = await axios.post("http://localhost:4000/products", form, {
       headers: {
         'Content-Type': 'multipart/form-data',
       },
     });
      console.log(form.fileProducto);
     // Puedes manejar la respuesta del servidor aquí si es necesario
     console.log(response.data);
 
     return response.data;
   } catch (error) {
     // Puedes manejar errores aquí
     console.error('Error en la solicitud:', error);
     throw error; // Lanzar el error para que pueda ser manejado por el código que llama a esta función
   }
 };
*/