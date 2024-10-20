import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({element}) => {
    const { isAuthenticated} = useSelector((store) => store.user);

    return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute