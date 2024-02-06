import { Navigate,Outlet } from "react-router-dom";
import PropTypes from "prop-types"

export const ProtectedRoutes = ({
  isAllowed, children,redirecTo="/"
}) => {
  
  if(!isAllowed){
    return <Navigate to={redirecTo}/>
  }
 
  return children ? children : <Outlet/>
}

ProtectedRoutes.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  children: PropTypes.node,
  redirecTo: PropTypes.string,
};

export default ProtectedRoutes;

