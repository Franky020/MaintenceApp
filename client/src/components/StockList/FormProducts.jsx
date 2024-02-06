import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/useAdmin";
import { useEffect, useState } from "react";

export const FormProducts = () => {
  const params = useParams();
  const { createProduct, getProduct, updateProduct } = useAdmin();
  const navigate = useNavigate();
  const [cod, setCod] = useState();
  const [fileImg, setFileImg] = useState(null);
  const [formValues, setFormValues] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    unidadmedida: "",
    preciocompra: "",
    precioventa: "",
    stock: "",
   
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const clearForm = () => {
    setFormValues({
      codigo: "",
      nombre: "",
      descripcion: "",
      preciocompra: "",
      precioventa: "",
      stock: "",
      unidadmedida: "",
    });
    setFileImg(null);
    reset();
    navigate("/inventario");
    
  };

  useEffect(() => {
    const loadProduct = async () => {
      if (params.codigo) {
        const product = await getProduct(params.codigo);
        setFormValues(product);
        setCod(params.codigo);
      }
    };
    loadProduct();
  }, [params.codigo, getProduct]);

 
  const handleFileChange = (e) => {
    setFileImg(e.target.files[0]);
  }

  const onSubmit = handleSubmit(async() => {
    try {
    
      if (!params.codigo) {
        setFormValues({...formValues, fileProducto : fileImg});
        await createProduct({...formValues, fileProducto : fileImg});
        clearForm();
      }
      if (params.codigo !== undefined) {
        setFormValues({...formValues, fileProducto : fileImg});
        const updateData = Object.keys(formValues).filter(
          (field) => field !== "codigo"
        );
       
        const data = {};
        updateData.forEach((field) => {
          if (formValues[field] !== null && formValues[field] !== "") {
            data[field] = formValues[field]; 
          }
        });
        await updateProduct(cod, data);
        clearForm();
      }
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <div
      className="modal fade modal-lg"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="encabezado_form text-center">
              {params.codigo
                ? "Formulario Editar Producto"
                : "Formulario Nuevo Producto"}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <main className="container">
              <div className="contenedor-formulario">
                <form
                  className="needs-validation"
                  noValidate
                  encType="multipart/form-data"
                  onSubmit={onSubmit}
                >
                  <div className="span mb-3">
                    <small>
                      Los campos marcados con <span>*</span> son obligatorios
                    </small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="codigoProducto" className="form-label">
                      Código del Producto<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigoProducto"
                      {...register("codigo", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo Código del producto es requerido",
                        },
                        minLength: {
                          value: 5,
                          message:
                            "El código debe tener al menos 5 caracteres.",
                        },
                        maxLength: {
                          value: 20,
                          message: "El código debe tener máximo 20 caracteres.",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]+$/,
                          message:
                            "El codigo de producto solo puede contener letras y numeros.",
                        },
                      })}
                      value={formValues.codigo}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          codigo: e.target.value,
                        });
                      }}
                      disabled={params.codigo ? true : false}
                      placeholder="Ingrese el código del producto"
                    />
                    {errors.codigo && <span>{errors.codigo.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nombreProducto" className="form-label">
                      Nombre del Producto<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombreProducto"
                      {...register("nombre", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo nombre del producto es requerido",
                        },
                        minLength: {
                          value: params.codigo ? false : 3,
                          message:
                            "El nombre del producto debe ser mayor a 3 caracteres",
                        },
                        maxLength: {
                          value: params.codigo ? false : 100,
                          message:
                            "El Nombre del producto no debe ser mayor a 50 caracteres",
                        },
                      })}
                      value={formValues.nombre}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombre: e.target.value,
                        });
                      }}
                      placeholder="Ingrese el nombre del producto"
                    />
                    {errors.nombre && <span>{errors.nombre.message}</span>}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="Descripcion_Producto"
                      className="form-label"
                    >
                      Descripcion del producto<span> *</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="Descripcion_Producto"
                      rows="2"
                      {...register("descripcion", {
                        required: {
                          value: params.codigo ? false : true,
                          message:
                            "El campo descripcion del producto es requerido",
                        },
                        minLength: {
                          value: params.codigo ? false : 3,
                          message:
                            "La descripción del producto debe ser mayor a 3 caracteres",
                        },
                        maxLength: {
                          value: params.codigo ? false : 100,
                          message:
                            "La descripción del producto no deber ser mayor a 100 caracteres",
                        },
                      })}
                      value={formValues.descripcion}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          descripcion: e.target.value,
                        });
                      }}
                      placeholder="Ingresa la descripción del producto"
                    />
                    {errors.descripcion && (
                      <span>{errors.descripcion.message}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="unidadMedida" className="form-label">
                      Unidad Medida
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="unidadMedida"
                      {...register("unidadmedida", {
                        required: {
                          value: false,
                          message: "El campo unidad de medidad es requerido",
                        },
                        pattern: {
                          value: "^[a-zA-Z]",
                          message: "Formato de unidad de medida no valido",
                        },
                      })}
                      value={formValues.unidadmedida}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          unidadmedida: e.target.value,
                        });
                      }}
                      placeholder="Ingrese la unidad de Medida del producto"
                    />
                    {errors.unidadmedida && (
                      <span>{errors.unidadmedida.message}</span>
                    )}
                  </div>

                  <div className="row mb-4 wap">
                    <div className="col">
                      <label htmlFor="costo" className="col-4 col-form-label">
                        Costo Compra<span> *</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          id="costo"
                          {...register("preciocompra", {
                            required: {
                              value: params.codigo ? false : true,
                              message: "El campo costo Compra es requerido",
                            },
                            pattern: {
                              value: /^[0-9]+(\.[0-9]{2})?$/,
                              message: "Formato de precio no valido.Solo acepta numeros . 2 decimales máximo"
                            }
                          })}
                          value={formValues.preciocompra}
                          onChange={(e) => {
                            setFormValues({
                              ...formValues,
                              preciocompra: e.target.value,
                            });
                          }}
                          placeholder="Ingresa el costo de compra"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label
                        htmlFor="costoVenta"
                        className="col-4 col-form-label"
                      >
                        Costo Venta<span> *</span>{" "}
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          id="costoVenta"
                          {...register("precioventa", {
                            required: {
                              value: params.codigo ? false : true,
                              message: "El campo costo venta es requerido",
                            },
                            pattern: {
                              value: /^[0-9]+(\.[0-9]{2})?$/,
                              message: "Formato de precio no valido. Solo acepta numeros . 2 decimales máximo"
                            }
                          })}
                          value={formValues.precioventa}
                          onChange={(e) => {
                            setFormValues({
                              ...formValues,
                              precioventa: e.target.value,
                            });
                          }}
                          placeholder="Ingresa el precio de venta"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        {errors.preciocompra && (
                          <span>{errors.preciocompra.message}</span>
                        )}
                      </div>
                      <div className="col">
                        {errors.precioventa && (
                          <span>{errors.precioventa.message}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="stock" className="form-label">
                      Stock del Producto
                    </label>
                    <span> *</span>
                    <input
                      type="text"
                      className="form-control"
                      id="stock"
                      {...register("stock", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo unidad de medidad es requerido",
                        },
                        pattern: {
                          value: "^[0-9]",
                          message: "El stock solo puede contener numeros",
                        },
                      })}
                      value={formValues.stock}
                      onChange={(e) => {
                        setFormValues({ ...formValues, stock: e.target.value });
                      }}
                      placeholder="Ingrese el stock del producto"
                    />
                    {errors.stock && <span>{errors.stock.message}</span>}
                  </div>
                  {params.codigo ? null : (
                    <div className="mb-4">
                    <label htmlFor="img" className="col-4 col-form-label">
                      Imagen del producto
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="img"
                      {...register("fileProducto",{
                      })}
                      onChange={handleFileChange}
                    />
                   
                  </div>
                  )}
                  <div className="d-grid">
                    <button className="btn btn-danger" type="submit">
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => clearForm()}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProducts;
