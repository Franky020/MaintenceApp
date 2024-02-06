import { useState } from "react";
import { LoginContext } from "./LoginContext";
import { loginRequest } from "../api/login.api";
// eslint-disable-next-line react/prop-types
export const LoginContextProvider = ({ children }) => {
  
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);
 
{/*Inicio de sesión */}
  const UserLogin = async(data) => {
    try {
      const userLogin = await loginRequest(data);
     if(userLogin){
      setUser(userLogin.data);
      setLogin(true);
      console.log(user)
      console.log("Inicio de sesión Exitoso");
     }
     window.localStorage.setItem('login', JSON.stringify(userLogin));
     console.log(userLogin)
   
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  {/* Cierre de sesión */}
  const Logout = () => {
    setUser(null);
    setLogin(false);
    window.localStorage.removeItem('login');
    console.log("Cierre de sesión Exitoso");
  };

  return (
    <LoginContext.Provider value={{ user,setUser, login, UserLogin, Logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;