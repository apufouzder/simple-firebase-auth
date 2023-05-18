/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthProvider } from '../Providers';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);

    if (loading) {
        return <div className='text-center mt-10'><progress className="progress w-56"></progress></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;