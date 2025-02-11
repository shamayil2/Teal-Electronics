import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {useState} from "react"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"

import App from './App.jsx'
import AllProducts from "./pages/AllProducts"
import CategoryProducts from "./pages/CategoryProducts"
import ProductDetails from "./pages/ProductDetails"
import Wishlist from "./pages/Wishlist"

function Root(){
  const [wishlist,setWishlist] = useState({})
  const [inWishlist,setInWishlist] = useState([])
  const router = createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"/products/category/:categoryId",
    element:<CategoryProducts setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist}/>
  },
  {path:"/products",
  element:<AllProducts setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist}/>},
  {
    path:"/products/productdetails/:productId",
    element:<ProductDetails setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist}/>
  },{
    path:"/products/wishlist",
    element:<Wishlist setWishlist={setWishlist} wishlist={wishlist} />
  }
  ]
  
  )

  return <RouterProvider router={router} />

}





createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Root/>
  </StrictMode>,
)
