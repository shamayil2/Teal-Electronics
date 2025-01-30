import {useParams} from "react-router-dom"
import useFetch from "../useFetch"
import Header from "../components/Header"
import "./styles.css"
import {useState} from "react"
const ProductDetails = () => {
const productId = useParams()
console.log(productId.productId)
const {data,loading,error} = useFetch(`http://localhost:3000/products/productdetails/${productId.productId}`)
const [count,setCount] = useState(1)
const clickHandler = () => {
    if(count>1){
        setCount(count-1)
    }
}
    return(
        <>
        <Header/>
        <div className="container py-4">
            
       
        {
            data?(
                <div className="row">
                <div className="col-md-3 container text-center">
                <img className="img-fluid" src={data.productImage} alt="" />
                <button style={{padding:"0px 80px",color:"#008080",backgroundColor:"#F4f2DE",margin:"10px 0px"}}>Add to Wishlist</button><br/>
                <button style={{padding:"0px 80px",color:"#F4F2DE",backgroundColor:"#008080"}}>Add to Cart</button>  
                
                </div>
                <div className="col-md-9">
                    <h2>{data.title}</h2>
                    <p><b>Rating</b> : {data.rating}  </p>
                    <p><b>Price: Rs.{data.price}</b> <del>Rs.{data.originalPrice}</del> {(data.price / data.originalPrice * 100).toFixed(1)} % off</p> 
                    <p>Quantity: <button onClick={clickHandler}>-</button>  {count}  <button onClick={()=>setCount(count + 1 )}>+</button></p>
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