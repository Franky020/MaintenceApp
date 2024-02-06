import { useForm } from "react-hook-form";
import { useAdmin } from "../../context/useAdmin";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLogin } from "../../context/useLogin";

export const FormNewUser = () => {
  const params = useParams();
  const { user } = useLogin();
  const { userCreate, userUpdate, getUser } = useAdmin();
  const navigate = useNavigate();
  const [cod, setCod] = useState();
  const [formValues, setFormValues] = useState({
    codigo: "",
    nombre: "",
    apellidopaterno: "",
    apellidomaterno: "",
    correo: "",
    telefono: "",
    empresa: "JAMX",
    tipoUsuario: "",
    contrasena: "",
    confirmarpass: "",
  });
  const clearForm = () => {
    setFormValues({
      codigo: "",
      nombre: "",
      apellidopaterno: "",
      apellidomaterno: "",
      correo: "",
      telefono: "",
      empresa: "JAMX",
      tipoUsuario: "",
      contrasena: "",
      confirmarpass: "",
    });
    navigate("/usuarios");
    reset();
  };
  useEffect(() => {
    if (user !== undefined && user !== null) {
      const loadUser = async () => {
        if (params.codigo !== undefined) {
          const user = await getUser(params.codigo);
          setCod(params.codigo);
          setFormValues({ ...user, confirmarpass: user.contrasena });
        }
      };
      loadUser();
    }
  }, [params.codigo, getUser, user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (formValues) => {
    try {
      if (!params.codigo) {
        await userCreate(formValues);
        clearForm();
      }
      if (params.codigo !== undefined) {
        const updatedData = Object.keys(formValues).filter(
          (field) => field !== "codigo" && field !== "confirmarpass"
        );
        const data = {};
        updatedData.forEach((field) => {
          if (formValues[field] !== "" && formValues[field] !== null) {
            data[field] = formValues[field];
          }
        });
        await userUpdate(cod, data);
       clearForm();
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
                ? "Formulario Editar Usuario"
                : "Formulario Nuevo Usuario"}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <main className="container mb-4">
              <div className="contenedor-formulario">
                <form
                  className="needs-validation"
                  encType="multipart/form-data"
                  onSubmit={onSubmit}
                >
                  <div className="span mb-3">
                    <small>
                      Los campos marcados con <span>*</span> son obligatorios
                    </small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="codigo" className="form-label">
                      Código del Usuario<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigo"
                      placeholder="Ingrese el codigo para el usuario"
                      {...register("codigo", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo Código es requerido",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]+$/,
                          message:
                            "El código solo puede contener letras y numeros",
                        },
                        minLength: {
                          value: 5,
                          message: "El código debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 10,
                          message:
                            "El código no puede tener más de 10 caracteres",
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
                    />
                    {errors.codigo && <span>{errors.codigo.message} </span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Nombre del Usuario<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      {...register("nombre", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "Por favor, ingrese el nombre del usuario.",
                        },
                        minLength: {
                          value: 3,
                          message: "El nombre debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "El nombre no puede tener más de 20 caracteres",
                        },
                        pattern: {
                          value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
                          message: "El nombre solo puede contener letras",
                        },
                      })}
                      value={formValues.nombre}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          nombre: e.target.value,
                        });
                      }}
                      placeholder="Ingrese el nombre del usuario"
                    />
                    {errors.nombre && <span>{errors.nombre.message} </span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="appPat" className="form-label">
                      Apellido Paterno<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="appPat"
                      {...register("apellidopaterno", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo apellido paterno es requerido",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "El apellido debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "El apellido no puede tener más de 20 caracteres",
                        },
                        pattern: {
                          value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
                          message: "El apellido solo puede contener letras",
                        },
                      })}
                      value={formValues.apellidopaterno}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          apellidopaterno: e.target.value,
                        });
                      }}
                      placeholder="Ingrese el apellido paterno del usuario"
                    />
                    {errors.apellidopaterno && (
                      <span>{errors.apellidopaterno.message} </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apMat" className="form-label">
                      Apellido Materno<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apMat"
                      {...register("apellidomaterno", {
                        required: {
                          value: params.codigo ? false : true,
                          message: "El campo apellido Materno es requerido",
                        },
                      })}
                      value={formValues.apellidomaterno}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          apellidomaterno: e.target.value,
                        });
                      }}
                      placeholder="Ingrese el apellido materno del usuario"
                    />
                    {errors.apellidomaterno && (
                      <span>{errors.apellidomaterno.message}</span>
                    )}
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
                          message: "El correo electronico es requerido",
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
                    <label htmlFor="phone" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Ingrese el número de telefono celular del usuario"
                      {...register("telefono", {})}
                      value={formValues.telefono}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          telefono: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company" className="form-label">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      {...register("empresa", {
                        required: {
                          value: "JAMX",
                        },
                      })}
                      value={formValues.empresa}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          empresa: e.target.value,
                        });
                      }}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userType" className="form-label">
                      Rol de Usuario <span>*</span>
                    </label>
                    <select
                      className="form-select"
                      id="userType"
                      {...register("tipoUsuario", {
                        required: {
                          value: params.codigo ? false : true,
                          message:
                            "El campo rol de usuario es requerido. Selecciona un tipo de usuario",
                        },
                      })}
                      value={params.tipoUsuario}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          tipoUsuario: e.target.value,
                        });
                      }}
                    >
                      <option readOnly>Seleccione el tipo de usuario</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Tecnico">Tecnico</option>
                      <option value="Ventas">Ventas</option>
                      <option value="Almacen">Almacen</option>
                    </select>
                    {errors.tipoUsuario && (
                      <span>{errors.tipoUsuario.message}</span>
                    )}
                  </div>
                  <div className="mb-4 row">
                    <div className="text-center mt-3">
                      <label htmlFor="password" className="form-label">
                        Contraseña <span>*</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        {...register("contrasena", {
                          required: {
                            value: params.codigo ? false : true,
                            message: " La contraseña es requerida",
                          },
                          minLength: {
                            value: params.codigo ? false : 6,
                            message:
                              "El campo contraseña debe tener 6 caracteres minimo",
                          },
                          maxLength: {
                            value: params.codigo ? false : 10,
                            message:
                              "El campo contraseña debe tener 10 caracteres máximo",
                          },
                        })}
                        value={formValues.contrasena}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            contrasena: e.target.value,
                          });
                        }}
                      />
                      {errors.contrasena && (
                        <span>{errors.contrasena.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 row">
                    <div className="text-center mt-3">
                      <label htmlFor="confirmarpass" className="form-label">
                        Confirmar Contraseña <span>*</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="confirmarpass"
                        {...register("confirmarpass", {
                          required: {
                            value: params.codigo ? false : true,
                            message:
                              " La Confirmación de contraseña es requerida",
                          },
                          validate: (value) =>
                            value === watch("contrasena") ||
                            "Las contraseñas no coinciden",
                        })}
                        value={formValues.confirmarpass}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            confirmarpass: e.target.value,
                          });
                        }}
                      />
                      {errors.confirmarpass && (
                        <span> {errors.confirmarpass.message}</span>
                      )}
                    </div>
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

export default FormNewUser;
