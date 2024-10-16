import { createRoot } from 'react-dom/client'
import './index.css'
import { AllRoutes } from './routes/AllRoutes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <RouterProvider router={AllRoutes}/>
)
