import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/useAdmin";
import { useEffect, useState } from "react";

export const FormOrderSales = () => {
  const params = useParams();
  const { createOrderSale, loadCustomers, customersList } = useAdmin();
  const navigate = useNavigate();
  const [filesImg, setFilesImg] = useState({
    fileCotizacion: null,
    fileOrdenCompra: null,
    fileFactura: null,
    fileAcuse: null,
  });
  const [formValues, setFormValues] = useState({
    codigo: "",
    clientes_codigo: "",
    direccion: "",
    correo: "",
    status: "",
    telefono: "",
  });
  useEffect(() => {
    loadCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFilesImg((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const clearForm = () => {
    setFormValues({
      codigo: "",
      clientes_codigo: "",
      direccion: "",
      correo: "",
      status: "",
      telefono: "",
    });
    setFilesImg([null, null, null, null]);
  };

  const onSubmit = handleSubmit(async () => {
    try {
     console.log(formValues);
     console.log(filesImg);

      setFormValues(
        {...formValues, ...filesImg})

         await createOrderSale({...formValues , ...filesImg});
        clearForm();
        reset();
    } catch (error) {
      console.error(error);
    }
    console.log(formValues);
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
                ? "Formulario Editar Orden de Venta"
                : "Formulario Nueva Orden de Venta"}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
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
                    <label htmlFor="codigoventa" className="form-label">
                      Codigo Orden de Venta<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigoventa"
                      placeholder="Ingrese el nombre del cliente"
                      {...register("codigo", {
                        required: {
                          value: true,
                          message:
                            "El campo código Orden de Venta es requerido",
                        },
                        minLength: {
                          value: 5,
                          message: "El código debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "El código debe tener máximo 20 caracteres",
                        },
                      })}
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

                  <div className="mb-3">
                    <label htmlFor="nombreCliente" className="form-label">
                      Nombre del Cliente<span> *</span>
                    </label>
                    <select
                      className="form-control"
                      id="nombreCliente"
                      {...register("clientes_codigo", {
                        required: {
                          value: true,
                          message: "El campo nombre cliente es requerido",
                        },
                        maxLength: {
                          value: 100,
                          message:
                            "El nombre de cliente no puede tener mas de 100 caracteres. ",
                        },
                      })}
                      value={formValues.clientes_codigo}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          clientes_codigo: e.target.value,
                        });
                      }}
                    >
                      <option aria-readonly>Selecciona un cliente</option>
                      {customersList.map((customer) => (
                        <option key={customer.codigo} value={customer.codigo}>
                          {customer.nombre} {customer.apellidopaterno}
                          {customer.apellidomaterno}
                        </option>
                      ))}
                    </select>

                    {errors.clientes_codigo && (
                      <span>{errors.clientes_codigo.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="direccionEnvio" className="form-label">
                      Dirección de Envío/Entrega<span> *</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="direccionEnvio"
                      rows="4"
                      placeholder="Ingrese la dirección del cliente"
                      {...register("direccion", {
                        required: {
                          value: true,
                          message:
                            "El campo Dirección Envío/Entrega es requerido",
                        },
                      })}
                      value={formValues.direccion}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          direccion: e.target.value,
                        });
                      }}
                    />
                    {errors.direccion && (
                      <span>{errors.direccion.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico<span> *</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="nombre@ejemplo.com"
                      {...register("correo", {
                        required: {
                          value: true,
                          message: "El campo Correo electrónico es requerido",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                          message: "Formato de Correo no valido",
                        },
                      })}
                      value={formValues.correo}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          correo: e.target.value,
                        });
                      }}
                    />
                    {errors.correo && <span>{errors.correo.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="estado" className="form-label">
                      Estatus de Orden
                    </label>
                    <select
                      className="form-control"
                      id="estado"
                      {...register("estado", {
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
                      <option value="">
                        Selecciona el estatus de la Orden de Compra
                      </option>
                      <option value="Asignado">Asignado</option>
                      <option value="Recibido">Recibido</option>
                      <option value="Pendiente">Pendiente</option>
                      <option value="Finalizado">Finalizado</option>
                      <option value="Cancelado">Cancelado</option>
                    </select>
                    {errors.estado && <span>{errors.estado.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="teléfono" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teléfono"
                      placeholder="Ingrese el número de telefono celular del cliente"
                      {...register("telefono", {
                        required: false,
                      })}
                      value={formValues.telefono}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          telefono: e.target.value,
                        });
                      }}
                    />
                    {errors.telefono && <span>{errors.telefono.message}</span>}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cotizacion"
                      className="col-4 col-form-label"
                    >
                      Cotizacion
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="cotizacion"
                      accept="image/png, image/jpeg, image/jpg, application/pdf"
                      {...register("fileCotizacion", {
                        required: {
                          value: false,
                          message: "El campo imagen es requerido",
                        },
                        pattern: {
                          value: /^image\/(png|jpg|jpeg|pdf)$/,
                          message:
                            "Cotizacion solo acepta archivos con extensión png, jpg, jpeg, pdf",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, 'fileCotizacion')}
                    />
                    {errors.fileCotizacion && (
                      <span>{errors.fileCotizacion.message}</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="ordenCompra"
                      className="col-4 col-form-label"
                    >
                      Orden Compra
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="ordenCompra"
                      accept="image/png, image/jpeg, image/jpg, application/pdf"
                      {...register("fileOrdenCompra", {
                        required: {
                          value: false,
                          message: "El campo imagen es requerido",
                        },
                        pattern: {
                          value: /^image\/(png|jpg|jpeg|pdf)$/,
                          message:
                            "Orden de Compra solo acepta archivos con extensión png, jpg, jpeg, pdf",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, 'fileOrdenCompra')}
                    />
                    {errors.fileOrdenCompra && (
                      <span>{errors.fileOrdenCompra.message}</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="factura" className="col-4 col-form-label">
                      Factura
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="factura"
                      accept="image/png, image/jpeg, image/jpg, application/pdf"
                      {...register("fileFactura", {
                        required: {
                          value: false,
                          message: "El campo imagen es requerido",
                        },
                        pattern: {
                          value: /^image\/(png|jpg|jpeg|pdf)$/,
                          message:
                            "Imagen del producto solo acepta archivos con extensión png, jpg, jpeg, pdf",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, 'fileFactura')}
                    />
                    {errors.fileFactura && (
                      <span>{errors.fileFactura.message}</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="img" className="col-4 col-form-label">
                      Acuse Entrega
                    </label>
                    <input
                      type="file"
                      className="col-8 form-control"
                      id="img"
                      accept="image/png, image/jpeg, image/jpg, application/pdf"
                      {...register("fileAcuse", {
                        required: {
                          value: false,
                          message: "El campo imagen es requerido",
                        },
                        pattern: {
                          value: /^image\/(png|jpg|jpeg|pdf)$/,
                          message:
                            "Imagen del producto solo acepta archivos con extensión png, jpg, jpeg, pdf",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, 'fileAcuse')}
                    />
                    {errors.fileacuse && (
                      <span>{errors.fileacuse.message}</span>
                    )}
                  </div>
                  <div className="d-grid text-center">
                    <button className="btn btn-danger" type="submit">
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
              <div />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => navigate("/ventas")}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOrderSales;
