import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({element}) => {
    const { singleUserData} = useSelector((store) => store.user);

    return singleUserData ? element : <Navigate to="/login" />;
}

export default ProtectedRoute