import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({children}) =>{
    const {user, loading} = useContext(AuthContext);
    const loaction = useLocation();

    if(loading)
    {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user)
    {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
}
export default PrivateRoutes;