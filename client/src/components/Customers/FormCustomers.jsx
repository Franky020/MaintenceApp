import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/useAdmin";
import { useEffect, useState } from "react";


export const FormCustomers = () => {
  const params = useParams();
  const { createCustomer, updateCustomer, getCustomer } = useAdmin();
  const navigate = useNavigate();
  const [cod, setCod] = useState();

  const [formValues, setFormValues] = useState({
    codigo: "",
    nombre: "",
    sucursal: "",
    contacto: "",
    direccion: "",
    correo: "",
    telefono: "", 
  });

  useEffect(() => {
    const loadCustomer = async () => {
      if (params.codigo) {
        const customer = await getCustomer(params.codigo);
        setCod(params.codigo);
        setFormValues(customer);
      }
    };
    loadCustomer();
  }, [params.codigo, getCustomer]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const clear = () => {
    setFormValues({
      codigo: "",
    nombre: "",
    sucursal: "",
    contacto: "",
    direccion: "",
    correo: "",
    telefono: "",
    })
  }
  const onSubmit = handleSubmit(async (formValues) => {
    try {
      if (!params.codigo) {
        await createCustomer(formValues);
        clear();
      }
      if (params.codigo !== undefined) {
        const updateData = Object.keys(formValues).filter(
          (field) => field !== field.codigo
        );
        const data = {};
        updateData.forEach((field) => {
          if (formValues[field] !== null && formValues[field] !== "") {
            data[field] = formValues[field];
          }
        });
        await updateCustomer(cod, data);
        reset();
        navigate("/clientes");
      }
      
    } catch (error) {
      console.log(error);
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
                ? "Formulario Editar Cliente"
                : "Formulario Nuevo Cliente"}
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
              <div className="span mb-3">
                <small>
                  Los campos marcados con <span>*</span> son obligatorios
                </small>
              </div>

              <div className="contenedor-formulario">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={onSubmit}
                >
                  <div className="mb-3">
                    <label htmlFor="codigoCliente" className="form-label">
                      Código del Cliente<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigoCliente"
                      placeholder="Ingrese el nombre del cliente"
                      {...register("codigo", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo Código del Cliente es requerido.",
                        },
                        minLength: {
                          value: 5,
                          message:
                            "El código del cliente debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "El código del cliente no debe tener más de 20 caracteres.",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]+$/,
                          message:
                            "El codigo de Cliente solo puede contener letras y numeros.",
                        },
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
                  <div className="mb-3">
                    <label htmlFor="nombreCliente" className="form-label">
                      Nombre del Cliente<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombreCliente"
                      placeholder="Ingrese el nombre del cliente"
                      {...register("nombre", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo Nombre del Cliente es requerido.",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "El nombre del cliente debe tener al menos 3 caracteres.",
                        },
                        maxLength: {
                          value: 50,
                          message:
                            "El nombre del cliente no debe tener más de 50 caracteres.",
                        },
                      })}
                      value={formValues.nombre}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombre: e.target.value,
                        });
                      }}
                    />
                    {errors.nombre && <span>{errors.nombre.message}</span>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="sucursal" className="form-label">
                      Sucursal<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sucursal"
                      placeholder="Ingrese el apellido paterno del cliente"
                      {...register("sucursal", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo Sucursal es requerido.",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "La sucursal debe tener al menos 3 caracteres.",
                        },
                        maxLength: {
                          value: 50,
                          message:
                            "La sucursal no puede tener mas de 50 caracteres.",
                        },
                      })}
                      value={formValues.sucursal}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          sucursal: e.target.value,
                        });
                      }}
                    />
                    {errors.sucursal && <span>{errors.sucursal.message}</span>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contacto" className="form-label">
                      Contacto<span> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contacto"
                      placeholder="Ingrese el apellido materno del cliente"
                      {...register("contacto", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El nombre del contacto es requerido",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "El nombre del contacto debe tener al menos 3 caracteres.",
                        },
                        maxLength: {
                          value: 50,
                          message:
                            "El nombre del contacto no debe tener más de 50 caracteres.",
                        },
                      })}
                      value={formValues.contacto}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          contacto: e.target.value,
                        });
                      }}
                    />
                    {errors.contacto && <span>{errors.contacto.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefonoCliente" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefonoCliente"
                      placeholder="Ingrese el número de telefono celular del cliente"
                      {...register("telefono", {
                        required: {
                          value: false,
                        },
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message:
                            "El número de teléfono celular debe tener 10 dígitos y solo puede contener números.",
                        },
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
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico<span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="nombre@ejemplo.com"
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
                    />
                    {errors.correo && <span>{errors.correo.message}</span>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="direccionCliente" className="form-label">
                      Dirección del cliente<span> *</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="direccionCliente"
                      rows="4"
                      placeholder="Ingrese la dirección del cliente"
                      {...register("direccion", {
                        required: {
                          value: params.codigo ? false : true,
                          message:
                            "El campo Dirección del cliente es requerido",
                        },
                        minLength: {
                          value: 10,
                          message:
                            "La dirección del cliente debe tener al menos 10 caracteres",
                        },
                        maxLength: {
                          value: 200,
                          message:
                            "La dirección del cliente no debe tener más de 200 caracteres",
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
              onClick={() => navigate("/clientes")}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCustomers;
