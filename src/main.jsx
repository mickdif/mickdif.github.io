import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PlacesHome from './Places/Home.jsx'
import BlogHome from './Blog/Home.jsx'
import CanvasHome from './Canvas/Home.jsx'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Blog",
    element: <BlogHome />
  },
  {
    path: "/Places",
    element: <PlacesHome />
  },
  {
    path: "/Canvas",
    element: <CanvasHome />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>,
)
