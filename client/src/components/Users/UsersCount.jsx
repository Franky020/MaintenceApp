import { useEffect } from "react";
import { useAdmin } from "../../context/useAdmin";
import { useLogin } from "../../context/useLogin";

 export const UserCount= ()  => {
  const {user} = useLogin();
  const {countUsers,loadUsers} = useAdmin();
  useEffect (()=> {
     
    if(user !== undefined && user !== null){
      loadUsers();
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="card-body">
      <p className="card-text">Usuarios</p>
      <p className="contador">{countUsers}</p>
    </div>
  )
}

export default UserCount