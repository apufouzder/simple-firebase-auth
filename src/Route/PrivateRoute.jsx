/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthProvider } from '../Providers';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthProvider);

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;