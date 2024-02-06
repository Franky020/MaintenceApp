import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/useAdmin";
import { useEffect, useState } from "react";

export const FormOrderPurchase = () => {
  const params = useParams();
  const {
    createOrderPurchase,
    productsList,
    loadProducts,
    loadSuppliers,
    suppliersList,
  } = useAdmin();
  const navigate = useNavigate();
  const [filesImg, setFilesImg] = useState({
    fileCompra: null,
    fileEntrega: null,
});

  const [formValues, setFormValues] = useState({
    codigo: "",
    nombreproducto: "", /*Guarda codigo */
    cantidad: "",
    unidadmedida: "",
    fechaentrega: "",
    status: "",
    observaciones: "",
    proveedores_codigo: "", /*Guarda codigo de proveedor */
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    loadProducts();
    loadSuppliers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFilesImg((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const clearForm =() => {
    setFormValues({
      codigo: "",
      nombreproducto: "", 
      cantidad: "",
      unidadmedida: "",
      fechaentrega: "",
      status: "",
      observaciones: "",
      proveedores_codigo: ""
    });
    setFilesImg([null, null])
    reset();
  }
  const onSubmit = handleSubmit(async() => {
    try {
        setFormValues(
          {...formValues, ...filesImg});
          await createOrderPurchase({...formValues, ...filesImg});
          console.log(formValues)
         clearForm();
      /*
      if (params.codigo !== undefined) {
        const updateData = Object.keys(formValues).filter(
          (field) => field !== "codigo"
        );
        const data = {};
        updateData.forEach((field) => {
          if (formValues[field] !== null && formValues[field] !== "") {
            data[field] = formValues[field];
          }
        });
        updateOrderPurchase(cod, data);
        reset();
      }
      */
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
            <h2 className="encabezado_form text-center m-0">
              {params.codigo
                ? "Formulario Editar Orden de Compra"
                : "Formulario Nueva Orden de Compra"}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <section className="container">
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
                    <label htmlFor="codigoOrdenCompra" className="form-label">
                      Código Orden de Compra<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigoOrdenCompra"
                      placeholder="Ingrese el código de la Orden de Compra"
                      {...register("codigo", {
                        required: {
                          value: true,
                          message: "El campo Código es requerido",
                        },
                        minLength: {
                          value: 5,
                          message: "El código debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "El código debe tener máximo 20 caracteres",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]+$/,
                          message: "El código solo puede contener letras y numeros"
                        }
                      })}
                      disabled={params.codigo ? true : false}
                      value={formValues.codigo}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          codigo: e.target.value,
                        });
                      }}
                    />
                    {errors.codigo && <span>{errors.codigo.message}</span>}
                  </div>

                  <div className="product">
                    <table className="table table-bordered custom-table">
                      <thead>
                        <tr>
                          <th className="no-border">
                            Producto <span> *</span>
                          </th>
                          <th className="no-border">
                            Cantidad <span> *</span>
                          </th>
                          <th className="no-border">
                            Unidad Medida <span> </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <select
                              className="form-select"
                              id="selectProducto"
                              {...register("nombreproducto", {
                                required: {
                                  value: true,
                                  message: "El campo Producto es requerido",
                                },
                              })}
                              value={formValues.nombreproducto}
                              onChange={(e) => {
                                setFormValues({
                                  ...formValues,
                                  nombreproducto: e.target.value,
                                });
                              }}
                            >
                              <option>
                                {params.codigo
                                  ? formValues.nombreproducto
                                  : "Selecciona un producto"}
                              </option>
                              {productsList.map((product) => (
                                <option
                                  key={product.codigo}
                                  value={product.codigo}
                                >
                                  {product.nombre}
                                </option>
                              ))}
                            </select>
                            <div>
                              {errors.nombreproducto && (
                                <span>{errors.nombreproducto.message}</span>
                              )}
                            </div>
                          </td>

                          <td>
                            <input
                              type="text"
                              className="form-control"
                              id="Cantidad"
                              placeholder="Ingresa la cantidad"
                              {...register("cantidad", {
                                required: {
                                  value: true,
                                  message: "El campo Cantidad es requerido",
                                },
                                minLength: {
                                  value: 1,
                                  message: "La cantidad debe ser mayor a 1",
                                },
                                pattern: {
                                  value: /^[0-9]/,
                                  message: "La cantidad debe ser un número",
                                },
                              })}
                              value={formValues.cantidad}
                              onChange={(e) => {
                                setFormValues({
                                  ...formValues,
                                  cantidad: e.target.value,
                                });
                              }}
                            />

                            <div>
                              {errors.cantidad && (
                                <span>{errors.cantidad.message}</span>
                              )}
                            </div>
                          </td>

                          <td>
                            <div className="input-group">
                              
                              <input
                                type="text"
                                className="form-control"
                                id="precio_unitario"
                                placeholder="Ingresa la unidad de Medida"
                                {...register("unidadmedida", {
                                  required: {
                                    value: false,
                                    message: "La unidad de medida es requerida"
                                  }
                                })}
                                value={formValues.unidadmedida}
                                onChange={(e) => {
                                  setFormValues({
                                    ...formValues,
                                    unidadmedida: e.target.value,
                                  });
                                }}
                               
                              />
                              <div>
                                {errors.unidadmedida && (
                                  <span>{errors.unidadmedida.message}</span>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="proveedor" className="form-label">
                      Proveedor
                    </label>
                    <select
                      className="form-control"
                      id="proveedor"
                      {...register("proveedores_codigo", {
                        required: {
                          value: false,
                          message: "El proveedor es obligatorio",
                        },
                      })}
                      value={formValues.proveedores_codigo}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          proveedores_codigo: e.target.value,
                        });
                      }}
                    >
                      <option readOnly>Selecciona un proveedor</option>
                      {suppliersList.map((supplier) => (
                        <option key={supplier.codigo} value={supplier.codigo}>
                          {supplier.nombreproveedor}
                        </option>
                      ))}
                    </select>
                    {errors.proveedores_codigo && (
                      <span>{errors.proveedores_codigo.message}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="estado" className="form-label">
                      Estatus de Orden
                    </label>
                    <select
                      className="form-control"
                      id="estado"
                      {...register("status", {
                        required: {
                          value: false,
                          message: "El campo estado es requerido",
                        },
                      })}
                      value={formValues.status}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          status: e.target.value,
                        });
                      }}
                    >
                      <option value="">Selecciona el estatus de la Orden de Compra</option>
                      <option value="Asignado">Asignado</option>
                      <option value="Recibido">Recibido</option>
                      <option value="Pendiente">Pendiente</option>
                      <option value="Finalizado">Finalizado</option>
                      <option value="Cancelado">Cancelado</option>
                    </select>
                    {errors.status && (
                      <span>{errors.status.message}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                      Observaciones
                    </label>
                    <textarea
                      className="form-control"
                      id="descripcion"
                      rows="4"
                      placeholder="Ingrese las observaciones de la compra"
                      {...register("observaciones", {
                        required: {
                          value: false,
                          message: "El campo Observaciones es requerido",
                        },
                      })}
                      value={formValues.observaciones}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          observaciones: e.target.value,
                        });
                      }}
                    />
                    {errors.observaciones && (
                      <span>{errors.observaciones.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="fechaEntrega" className="form-label">
                      Fecha de Entrega
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaEntrega"
                      placeholder="Ingresa la fecha de entrega de la orden de compra"
                      {...register("fechaentrega", {
                        required: {
                          value: false,
                          message: "El campo Fecha de Entrega es requerido",
                        },
                      })}
                      value={formValues.fechaentrega}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          fechaentrega: e.target.value,
                        });
                      }}
                    />
                    {errors.fechaentrega && (
                      <span>{errors.fechaentrega.message}</span>
                    )}
                  </div>

                  
                  <div className="mb-4">
                    <label htmlFor="filecompra" className="col-4 col-form-label">
                      Orden de Compra
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="filecompra"
                      accept="image/png, image/jpeg, image/jpg, application/pdf"
                      {...register("fileCompra", {
                        required: {
                          value: false,
                          message: "El archivo Orden de Compra es requerido",
                        },
                        pattern: {
                          value: /^image\/(png|jpg|jpeg|pdf)$/,
                          message:
                            "Imagen del producto solo acepta archivos con extensión png, jpg, jpeg, pdf",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, 'fileCompra')}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="fileentrega" className="col-4 col-form-label">
                      Orden de Entrega de Proveedor
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="fileentrega"
                      accept="image/png, image/jpeg, image/jpg, application/pdf"
                      {...register("fileEntrega", {
                        required: {
                          value: false,
                          message: "El Archivo de Orden de Entrega de Proveedor es requerido",
                        },
                        pattern: {
                          value: /^image\/(png|jpg|jpeg|pdf)$/,
                          message:
                            "Imagen del producto solo acepta archivos con extensión png, jpg, jpeg, pdf",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, 'fileEntrega')}
                     
                    />
                  </div>

                  <div className="d-grid text-center">
                    <button className="btn btn-danger" type="submit">
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => navigate("/compras")}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOrderPurchase;
