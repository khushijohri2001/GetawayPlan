import React from 'react'
import SideNav from '../../components/Admin/SideNav'
import Header from '../../components/Admin/Header'
import { Outlet } from 'react-router-dom'

const AdminWrapper = () => {
    return (
        <div className='flex'>
            <SideNav />

            <div className='w-full'>
                <Header />
                <div className='flex items-center justify-center'>
                <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminWrapper