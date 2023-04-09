import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import LoginScreen from './modules/login/screens/LoginScreen';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
    errorElement: <div> Página não encontrada </div>
  },
  {
    path: "/home",
    element: <h2>Bem-vindo</h2>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
