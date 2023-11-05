import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;