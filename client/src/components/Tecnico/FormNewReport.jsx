import { useForm } from "react-hook-form";
import { useAdmin } from "../../context/useAdmin";
import { useLogin } from "../../context/useLogin";
import { useState } from "react";
export const FormNewReport = () => {
  const { createReport } = useAdmin();
  // eslint-disable-next-line no-unused-vars
  const { user } = useLogin();
  const [fileImg, setFileImg] = useState(null);

  const [formValues, setFormValues] = useState({
    nombreProyecto: "",
    nombreOperadora: "",
    direccion: "",
    diagnostico: "",
    nombreRepresentante: "",
    usuarios_codigo:"",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
    
  const clearForm = () => {
    setFormValues({
      nombreProyecto: "",
      nombreOperadora: "",
      direccion: "",
      diagnostico: "",
      nombreRepresentante: "",
      usuarios_codigo: "",
    });
    setFileImg(null);
    reset();
  };
  const handleFileChange = (e) => {
    setFileImg(e.target.files[0]);
  };

  const onSubmit = handleSubmit(async () => {
    setFormValues({ ...formValues, fileReporte: fileImg });
    console.log(formValues);

    await createReport({...formValues,usuarios_codigo: user.codigo, fileReporte: fileImg});
    clearForm();
  });
  return (
    <div
      className="modal fade modal-xl"
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
            <h2 className="modal-title text-center">
              Formulario Nuevo Reporte
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
                  encType="multipart/form-data"
                  onSubmit={onSubmit}
                >
                  <div className="mb-3">
                    <label htmlFor="Nombre_Proyecto" className="form-label">
                      Nombre del proyecto<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Nombre_Proyecto"
                      placeholder="Ingresa el nombre del proyecto"
                      {...register("nombreProyecto", {
                        required: {
                          value: true,
                          message: "El nombre del proyecto es requerido",
                        },
                        minLength: {
                          value: 5,
                          message:
                            "El nombre del proyecto debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 50,
                          message:
                            "El nombre del proyecto no puede tener mas de 50 caracteres",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message:
                            "El código solo puede contener letras y numeros",
                        },
                      })}
                      value={formValues.nombreProyecto}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombreProyecto: e.target.value,
                        });
                      }}
                    />
                    {errors.nombreProyecto && (
                      <span>{errors.nombreProyecto.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Nombre_Operadora" className="form-label">
                      Nombre de la operadora<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Nombre_Operadora"
                      placeholder="Ingresa el nombre de la operadora"
                      {...register("nombreOperadora", {
                        required: {
                          value: true,
                          message: "El nombre de la operadora es requerido",
                        },
                        minLength: {
                          value: 5,
                          message:
                            "El nombre de la operadora debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 100,
                          message:
                            "El nombre de la operadora no puede tener mas de 100 caracteres",
                        },
                      })}
                      value={formValues.nombreOperadora}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombreOperadora: e.target.value,
                        });
                      }}
                    />
                    {errors.nombreOperadora && (
                      <span>{errors.nombreOperadora.message}</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Direccion" className="form-label">
                      Dirección<span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="Direccion"
                      rows="3"
                      placeholder="Ingresa la dirección del proyecto"
                      {...register("direccion", {
                        required: {
                          value: true,
                          message: "La dirección es requerida",
                        },
                        minLength: {
                          value: 5,
                          message:
                            "La dirección debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 100,
                          message:
                            "La dirección no puede tener mas de 100 caracteres",
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

                  {/*APARTADO DESCRIPCION DEL DIAGNOSTICO*/}
                  <div className="mt-4 mb-3">
                    <label htmlFor="Diagnostico" className="form-label">
                      Descripcion del diagnóstico<span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="Diagnostico"
                      rows="3"
                      placeholder="Ingresa el diagnóstico"
                      {...register("diagnostico", {
                        required: {
                          value: true,
                          message:
                            "Debes ingresar una descripción del diagnóstico.",
                        },
                        maxLength: {
                          value: 200,
                          message:
                            "La descripción del diagnóstico no debe ser mayor a 200 caracteres ",
                        },
                      })}
                      value={formValues.diagnostico}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          diagnostico: e.target.value,
                        });
                      }}
                    />
                    {errors.diagnostico && (
                      <span>{errors.diagnostico.message}</span>
                    )}
                  </div>

                  {/*APARTADO REPRESANTENTE DEL PROYECTO*/}
                  <div className="mb-3">
                    <label
                      htmlFor="Representante_proyecto"
                      className="form-label"
                    >
                      Nombre del representante del proyecto
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Representante_proyecto"
                      placeholder="Ingresa el nombre del representante del proyecto"
                      {...register("nombreRepresentante", {
                        required: {
                          value: true,
                          message: "El nombre del representante es requerido",
                        },
                      })}
                      value={formValues.nombreRepresentante}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombreRepresentante: e.target.value,
                        });
                      }}
                    />
                    {errors.nombreRepresentante && (
                      <span>{errors.nombreRepresentante.message}</span>
                    )}
                  </div>

                  {/*APARTADO BOLETA*/}
                  <div className="mt-4">
                    <label htmlFor="img" className="form-label">
                      Boleta
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="img"
                      {...register("fileReporte", {
                        required: {
                          value: true,
                          message: "La boleta del reporte es requerida",
                        },
                      })}
                      onChange={(e) => handleFileChange(e, "fileReporte")}
                    />
                  </div>
                  {/*APARTADO BOTON AGREGAR REPORTE*/}
                  <div className="d-grid mt-3">
                    <button className="btn btn-danger" type="submit">
                      Agregar reporte
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
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNewReport;
