import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Goals } from './pages/Goals/Goals.jsx';
import { Goal } from './pages/Goals/Goal.jsx';
import { NewRegistry } from './pages/NewRegistry/NewRegistry.jsx';
import './styles.css'
import { Login } from './pages/Login/Login.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Register } from './pages/Register/Register.jsx';
import { Prueba } from './pages/Prueba/prueba.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Esto no se está viendo porque al final agregué una ruta que muestra el Home cuando nada matchea
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/goals",
        element: <Goals />
      },
      {
        path: "/goals/goal",
        element: <Goal />
      },
      {
        path: "/new",
        element: <NewRegistry />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/prueba",
        element: <Prueba />
      },
      {
        path: "/*",
        element: <Home />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
