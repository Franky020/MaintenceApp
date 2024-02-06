import { useEffect} from "react"
import { useAdmin } from "../../context/useAdmin"
import {useNavigate} from "react-router-dom"
export const RenderUser = () => {
  const navigate = useNavigate()
  const {usersList,userDelete,loadUsers} = useAdmin();
  
  useEffect (()=> {
      loadUsers();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
return (
      usersList.map(user => (
        
        <tr key={user.codigo}>
          <td scope="row"
           className="text-center"
           >
            {user.codigo}
          </td>
          <td scope="row" 
          className="text-center"
          >
            {user.nombre} {user.apellidopaterno} {user.apellidomaterno}
          </td>
          <td scope="row" 
            className="text-center"
          >
            {user.correo}
          </td>
          <td scope="row"
           className="text-center"
           >
            {user.telefono}
          </td>
          <td scope="row" 
            className="text-center"
          >
            {user.tipoUsuario}
          </td>
          <td scope="row" 
            className="center-icon">
            <div className="btn-group" role="group">
              <button 
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={()=> navigate(`/editUser/${user.codigo}`)}
              >
                <img src="../src/assets/bxs-edit.svg" alt="editar"/>
              </button>
              <button 
                className="btn btn-danger"
                onClick={()=> userDelete(user.codigo)}
              >
                <img src="../src/assets/bx-trash-alt.svg" alt="eliminar"/>
              </button>
            </div>
          </td>
        </tr>   
      ))  
  )

}

export default RenderUser