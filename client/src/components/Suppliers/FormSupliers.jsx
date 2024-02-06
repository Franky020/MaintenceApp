import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/useAdmin";
import { useEffect, useState } from "react";

export const FormSupliers = () => {
  const params = useParams();
  const { createSupplier, getSupplier, updateSupplier } = useAdmin();
  const navigate = useNavigate();
  const [cod, setCod] = useState(null);

  const [formValues, setFormValues] = useState({
    codigo: "",
    nombreproveedor: "",
    nombrecontacto: "",
    direccion: "",
    telefono: "",
    correo: "",
    observaciones: "",
  });
  useEffect(() => {
    const loadSupplier = async () => {
      if (params.codigo !== undefined && params.codigo !== null) {
        const supplier = await getSupplier(params.codigo);
        setCod(params.codigo);
        setFormValues(supplier);
      }
    };
    loadSupplier();
  }, [params.codigo, getSupplier]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const clear = () => {
    setFormValues({
      codigo: "",
    nombreproveedor: "",
    nombrecontacto: "",
    direccion: "",
    telefono: "",
    correo: "",
    observaciones: "",
    });
    navigate("/proveedores")
  }

  const onSubmit = handleSubmit(async (formValues) => {
    try {
      if (!params.codigo) {
        await createSupplier(formValues);
        clear();
      }
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
        await updateSupplier(cod, data);
        reset();
      }
    } catch (error) {
      console.log(error);
      reset();
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
                ? "Formulario Editar Proveedor"
                : "Formulario nuevo Proveedor"}
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
                <div className="span mb-3">
                  <small>
                    Los campos marcados con <span>*</span> son obligatorios
                  </small>
                </div>

                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={onSubmit}
                >
                  <div className="mb-3">
                    <label htmlFor="codigo" className="form-label">
                      Codigo del Proveedor<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigo"
                      {...register("codigo", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo código del proveedor es requerido",
                        },
                        minLength: {
                          value: 5,
                          message: "El código debe tener 5 caracteres minimo",
                        },
                        maxLength: {
                          value: 20,
                          message: "El código debe tener 20 caracteres máximo",
                        },
                      })}
                      value={formValues.codigo}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          codigo: e.target.value,
                        });
                      }}
                      placeholder="Ingresa el código del proveedor"
                      disabled={params.codigo ? true : false}
                    />
                    {errors.codigo && <span>{errors.codigo.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Nombre_Proveedor" className="form-label">
                      Nombre del Proveedor<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Nombre_Proveedor"
                      {...register("nombreproveedor", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo nombre del proveedor es requerido",
                        },
                      })}
                      value={formValues.nombreproveedor}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombreproveedor: e.target.value,
                        });
                      }}
                      placeholder="Ingresa el nombre del proveedor"
                    />
                    {errors.nombreproveedor && (
                      <span>{errors.nombreproveedor.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Nombre_Contacto" className="form-label">
                      Nombre de Contacto<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Nombre_Contacto"
                      {...register("nombrecontacto", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo nombre del contacto es requerido",
                        },
                        minLength: {
                          value: 5,
                          message: "El nombre del contacto debe tener minimo 5 caracteres."
                        },
                        maxLength: {
                          value: 30,
                          message: "El nombre del contacto no puede tener mas de 30 caracteres."
                        },
                      })}
                      value={formValues.nombrecontacto}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombrecontacto: e.target.value,
                        });
                      }}
                      placeholder="Ingresa el nombre de contacto del proveedor"
                    />
                    {errors.Nombre_Contacto && (
                      <span>{errors.Nombre_Contacto.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Direccion_Proveedor" className="form-label">
                      Dirección del proveedor<span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="Direccion_Proveedor"
                      rows="4"
                      {...register("direccion", {
                        required: {
                          value: params.codigo ? false : true,
                          message:
                            "El campo direccion del proveedor es requerido",
                        },
                        minLength: {
                          value: params.codigo ? false : 10,
                          message: "La direccion del proveedor no puede ser menor a 10 caracteres ",
                          maxLength: {
                            value: params.codigo ? false : 300,
                            message: "La direccion del proveedor no puede ser mayor a 300 caracteres",
                          }
                        }
                      })}
                      value={formValues.direccion}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          direccion: e.target.value,
                        });
                      }}
                      placeholder="Ingresa la dirección del proveedor"
                    />
                    {errors.direccion && (
                      <span>{errors.direccion.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="teléfono" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teléfono"
                      {...register("telefono", {
                        required: {
                          value: false,
                          message:
                            "El campo teléfono del proveedor es requerido",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "El campo telefono solo acepta números"  
                        }
                      })}
                      value={formValues.telefono}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          telefono: e.target.value,
                        });
                      }}
                      placeholder="Ingresa el número de teléfono del proveedor"
                    />
                    {errors.teléfono && <span> {errors.teléfono.message}</span>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico<span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      {...register("correo", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo correo electrónico es requerido",
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
                      placeholder="nombre@ejemplo.com"
                    />

                    {errors.correo && <span> {errors.correo.message}</span>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Observaciones" className="form-label">
                      Observaciones
                    </label>
                    <textarea
                      className="form-control"
                      id="Observaciones"
                      cols="4"
                      rows="4"
                      {...register("observaciones", {
                        required: {
                          value: false,
                        },
                      })}
                      value={formValues.observaciones}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          observaciones: e.target.value,
                        });
                      }}
                      placeholder="Ingresa las observaciones del producto"
                    ></textarea>
                    {errors.observaciones && (
                      <span> {errors.observaciones.message}</span>
                    )}
                  </div>

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
              onClick={() => clear()}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSupliers;
