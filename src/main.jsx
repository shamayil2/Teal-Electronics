import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {useState} from "react"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import App from './App.jsx'
import AllProducts from "./pages/AllProducts"
import CategoryProducts from "./pages/CategoryProducts"
import ProductDetails from "./pages/ProductDetails"
import Wishlist from "./pages/Wishlist"
import UserProfile from "./pages/UserProfile"
function Root(){
  const [idsInCartObj,setIdsInCartObj] = useState({})
  const [wishlist,setWishlist] = useState({})
  const [inWishlist,setInWishlist] = useState([])
  const [addressArr,setAddressArr] = useState(["121 Street 3,South Delhi, New Delhi 110025, India"])
  const router = createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"/products/category/:categoryId",
    element:<CategoryProducts setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist}/>
  },
  {path:"/products",
  element:<AllProducts setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist} idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj}/>},
  {
    path:"/products/productdetails/:productId",
    element:<ProductDetails setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist}/>
  },{
    path:"/products/wishlist",
    element:<Wishlist setWishlist={setWishlist} wishlist={wishlist} idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj}/>
  },{path:"/products/cart",
    element:<Cart idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj} setWishlist={setWishlist} wishlist={wishlist}/>
  },{
    path:"/userprofile",
    element:<UserProfile addressArr={addressArr} setAddressArr={setAddressArr}/>
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
