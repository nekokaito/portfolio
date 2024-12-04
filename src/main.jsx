import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './home/Root';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Tools from './pages/Tools';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Projects></Projects>
      },
      {
        path: "/skills",
        element: <Skill></Skill>
      },
      {
        path: "/tools",
        element: <Tools></Tools>
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)

