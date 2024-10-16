import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import store from '../redux/store'

const Wrapper = () => {
    return (
        <Provider store={store}>
            <Outlet />
        </Provider>
    )
}

export default Wrapper