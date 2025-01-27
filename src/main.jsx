import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import App from './App.jsx'
import AllProducts from "./pages/AllProducts"
import CategoryProducts from "./pages/CategoryProducts"
import ProductDetails from "./pages/ProductDetails"
const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"/products/category/:categoryId",
  element:<CategoryProducts/>
},
{path:"/products",
element:<AllProducts/>},
{
  path:"/products/productdetails/:productId",
  element:<ProductDetails/>
}
]

)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
