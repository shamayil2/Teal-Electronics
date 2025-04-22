import {useParams} from "react-router-dom"
import useFetch from "../useFetch"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import "./styles.css"
import {useState,useEffect} from "react"
const ProductDetails = ({setWishlist,wishlist,inWishlist,setInWishlist,idsInCartObj,setIdsInCartObj}) => {
const productId = useParams()
const {data,loading,error} = useFetch(`http://localhost:3000/products/productdetails/${productId.productId}`)
const [count,setCount] = useState(1)
const [alertCart,setAlertCart] = useState(false)

useEffect(()=>{
setTimeout(() => {
    setAlertCart(false)
}, 4000);
},[idsInCartObj])

const clickHandler = () => {
    if(count>1){
        setCount(count-1)
    }
}

function addToCartFn(productId){

    setIdsInCartObj({...idsInCartObj,[productId]:count})
    setAlertCart(true)

}

function wishlistHandler(productId){
setWishlist({...wishlist,[productId]:count})
}

    return(
        <>
        <Header/>
        {alertCart && <>
            <div className="bg-primary text-light text-center fixed-top " >
            <p style={{marginBottom:"0px"}}>Item Added to Cart</p>
        </div>
        </>}
        <div className="container py-4">
            
       
        {
            data?(
                <div className="row">
                <div className="col-md-3 container text-center">
                <img className="img-fluid" src={data.productImage} alt="" />
               {data._id in wishlist?<button style={{padding:"0px 80px",margin:"10px 0px"}}><Link style={{color:"#008080",backgroundColor:"#F4F2DE",textDecoration:"none"}} to="/products/wishlist">Go to Wishlist</Link></button>:<button onClick={(id)=>wishlistHandler(data._id)} style={{padding:"0px 80px",color:"#F4F2DE",backgroundColor:"#008080",margin:"10px 0px"}}>Add to Wishlist</button>} 
               {data._id in idsInCartObj? <button style={{padding:"0px 80px",color:"#008080",backgroundColor:"#F4F2DE"}}><Link style={{color:"#008080",backgroundColor:"#F4F2DE",textDecoration:"none"}} to="/products/cart">Go to Cart</Link></button> : <button onClick={(id)=>addToCartFn(data._id)} style={{padding:"0px 80px",color:"#F4F2DE",backgroundColor:"#008080"}}>Add to Cart</button> } 
                
                </div>
                <div className="col-md-9">
                    <h2>{data.title}</h2>
                    <p><b>Rating</b> : {data.rating}  </p>
                    <p><b>Price: Rs.{data.price}</b> <del>Rs.{data.originalPrice}</del> {(data.price / data.originalPrice * 100).toFixed(1)} % off</p> 
                    <p>Quantity: <button onClick={clickHandler}>-</button>  {data._id in idsInCartObj? idsInCartObj[data._id] : count}  <button onClick={()=>setCount(count + 1 )}>+</button></p>
                    <hr/>
                     <span>Free Delivery 🚚 || </span>
                     <span>Easy returns ♻️ || </span>
                     <span>Highest Quality Product ☑️ </span>   
                    <hr/>
                    <h2>Features:</h2>
                    <ul>
                    {data.description.map((feature)=>(
                       <li>{feature}</li> 

                       
                    ))}
                     </ul>
                </div>
            </div>
            ): loading && <p>Loading...</p>
        }
         </div>
     
        </>
    )

}


export default ProductDetails;