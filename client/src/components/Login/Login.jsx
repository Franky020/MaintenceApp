import { useForm } from "react-hook-form";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import DynamicHeader from "../adminstrador/DynamicHeader";
import { useLogin } from "../../context/useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Login = () => {

  const { UserLogin, user} = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await UserLogin(data);
      reset();
    } catch (error) {
      console.log(error);
    } 
  });
  useEffect(()=> {
    const loadData = async () => {
      if(user !== undefined && user !== "" && user !== null){
        if(user.tipoUsuario === "Administrador"){
          navigate('/homeAdmin')
        }
        if(user.tipoUsuario === "Tecnico"){
          navigate('/homeUser')
        }
        if(user.tipoUsuario === "Ventas"){
          navigate('/homeVentas')
        }
        if(user.tipoUsuario === "Almacen"){
          navigate('/homeAlmacen')
        }
      }
    }
    loadData();
  },[user])
  
  return (
    <div className="container-fluid">
      <Header />
      <main className="container-fluid contenedor flex-column justify-content-center align-items-center">
        <div className="row">
          <h2 className="encabezado_form text-center mt-4 mb-4">
            <DynamicHeader />
          </h2>
        </div>
        <div className=" mt-5 w-50 mx-auto">
          <form className="container-md row" onSubmit={onSubmit}>
            <div className="mt-4 mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="nombre@ejemplo.com"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "El correo electronico es requerido",
                  },
                  pattern: {
                    value:
                      /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                    message: "Formato de Correo no valido",
                  },
                })}
              />
              {errors.correo && <span>{errors.correo.message}</span>}
            </div>

            <div className="mt-3 mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                {...register("contrasena", {
                  required: {
                    value: true,
                    message: " La contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "El campo contraseña debe tener 6 caracteres minimo",
                  },
                  maxLength: {
                    value: 10,
                    message:
                      "El campo contraseña debe tener 10 caracteres máximo",
                  },
                })}
                className="form-control"
                placeholder="Ingresa tu contraseña"
              />
              {errors.contrasena && <span>{errors.contrasena.message}</span>}
            </div>

            <div className="d-grid">
              <button className="btn btn-danger" type="submit">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Login;
