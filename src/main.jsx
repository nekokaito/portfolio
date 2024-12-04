import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Root from './home/Root';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Tools from './pages/Tools';

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Projects />,
      },
      {
        path: "/projects", 
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
