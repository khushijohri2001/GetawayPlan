/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({element}) => {
    const {singleUserData} = useSelector((store) => store.user);

    const isAdmin = singleUserData?.role === 'Admin'

    return singleUserData && isAdmin ? element : <Navigate to="/admin/login" />;
}

export default AdminRoute