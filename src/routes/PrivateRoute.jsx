import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.auth);

    if (user.isAuthenticated) {
        return children
    } else {
        return <Navigate to="/login" />;
    }
};


export default PrivateRoute

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}