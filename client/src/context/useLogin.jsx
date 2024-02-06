import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin =() => {
  const context = useContext(LoginContext);
  if(!context){
    throw new Error('useLogin must be used within AdminContext');
  }
  return context
}