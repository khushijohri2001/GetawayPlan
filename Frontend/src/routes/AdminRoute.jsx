/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({element}) => {
    const {singleUserData, isAuthenticated} = useSelector((store) => store.user);

    const isAdmin = singleUserData?.role === 'Admin'

    return isAuthenticated && isAdmin ? element : <Navigate to="/admin/login" />;
}

export default AdminRoute