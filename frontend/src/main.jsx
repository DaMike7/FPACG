import React from 'react'
import ReactDOM from 'react-dom/client'
import Pin from '../src/pages/Pin.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/new-pin",
    element: <Pin/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
)
