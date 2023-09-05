import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

//pages
import { Home } from './routes/home/Home.jsx'
import { Portal } from './routes/portal/Portal.jsx'
import { Inclusao } from './routes/inclusao/Inclusao.jsx'
import { Maker } from './routes/maker/Maker.jsx'
import { Aprender } from './routes/aprender/Aprender.jsx'
import { Incubadora } from './routes/incubadora/Incubadora.jsx'
import { Imprensa } from './routes/imprensa/Imprensa.jsx'
import { Formulario } from './routes/form/Formulario.jsx'
 
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/portal",
        element: <Portal />
      },
      {
        path: "/inclusao",
        element: <Inclusao />
      },
      {
        path: "/maker",
        element: <Maker />
      },
      {
        path: "/aprender",
        element: <Aprender />
      },
      {
        path: "/incubadora",
        element: <Incubadora />
      },
      {
        path: "/imprensa",
        element: <Imprensa />
      },
      { 
        path: "/aprender/form",
        element: <Formulario />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      <RouterProvider router={router}/>
    }
  </React.StrictMode>
)
