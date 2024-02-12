import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/useLogin";

export const CardUser = () => {

  const { user, Logout } = useLogin();
  const navigate = useNavigate();
  const closeSesion = () => {
    Logout ();
    navigate('/');  
  } 
  // eslint-disable-next-line no-unused-vars
  return (
    <article className="row tw-followCard justify-content-end">
      <header className='col-4 text-end tw-followCard-header m-0 mt-0 pt-0'>
        <div className="row">
          <div className="tw-followCard-info m-2">
            <div>
              <img src="" alt="" />
            </div>
          </div>
        {<div className="tw-followCard-info m-2">
          <strong className='tw-followCard-infoUserName'>Bienvenido {user.nombre} </strong>
        </div>}
        </div>
      </header>
      <aside className="d-flex col-4 justify-content-end m-0 mt-0 pt-0 bottom-0 end-0">
        <button 
        className="tw-followCard-button"
        onClick={()=> closeSesion()}>
          <img className="imglogin" src="../src/assets/logout.svg" />
         <span></span>
        </button>
      </aside>
    </article>
  )
}

export default CardUser