import Header from "../components/Header"
import useFetch from "../useFetch"
import {useState} from "react"
const Cart = ({idsInCartObj,setIdsInCartObj,setWishlist,wishlist,placedOrderArr,setPlacedOrderArr,addressArr, setAddressArr}) => {
    console.log(idsInCartObj)
    const {data,loading,error} = useFetch("http://localhost:3000/products")
    const [orderAddress,setOrderAddress] = useState("")
    function increaseQuantityInCart(productId){
        setIdsInCartObj({...idsInCartObj,[productId]:idsInCartObj[productId]+1})
    }

    function decreaseQuantityInCart(productId){
        if(idsInCartObj[productId]>0){
            setIdsInCartObj({...idsInCartObj,[productId]:idsInCartObj[productId]-1})
        }
       
    }

    function removeIdFromCart(productId){

       delete idsInCartObj[productId] 
        setIdsInCartObj({...idsInCartObj})
    }

    function moveToWishlistFromCart(productId){

        if(productId in wishlist){

        }else{
            setWishlist({...wishlist,[productId]:1})
        }
    }

    function placeOrderFn(){

        setPlacedOrderArr({...idsInCartObj,address:orderAddress})
        setIdsInCartObj({})
        setOrderAddress("")
        alert("Order Placed Successfully!")

    }

    function setOrderAddressFn(event){

        setOrderAddress(event.target.value)

    }

    console.log(orderAddress)

    console.log(placedOrderArr)

    console.log(wishlist)

    return(
        <>
        <Header/>
        <main className="container py-4">
        <h1 className="text-center">My Cart</h1>
        <div className="row">
            <div className="col-md-9">
                <div className="row">
        {data?data.filter((product)=>product._id in idsInCartObj).map(product=> (<>
        <div className="col-md-4">
         <img style={{height:"200px"}} className="img-fluid" src={product.productImage} alt="" />   
        <h3>{product.title}</h3>
        <p>{product.originalPrice}</p>
        <p>Quantity:<span><button onClick={(id)=>increaseQuantityInCart(product._id)}>+</button><input type="text" className="text-center" style={{width:"30px"}} value={idsInCartObj[product._id]}/><button onClick={(id)=>decreaseQuantityInCart(product._id)}>-</button></span></p>
        <button style={{padding:"0px 30px",backgroundColor:"#FF7F7F",color:"white",border:"1px solid #FF7F7F"}} onClick={(id)=>removeIdFromCart(product._id)}>Remove from Cart</button>
       {product._id in wishlist? <button style={{padding:"0px 35px",backgroundColor:"#F4F2DE",color:"#008080"}}>Go To Wishlist</button>:<button onClick={(id)=>moveToWishlistFromCart(product._id)} style={{padding:"0px 35px",backgroundColor:"#008080",color:"#F4F2DE"}}>Move to Wishlist</button>} 
        </div>
        
        </>)):loading && <p>Loading..</p>}
        </div>
        </div>
        <div style={{height:"50vh",width:"20vw"}} className="col-md-3 bg-light p-4">
            <h1>Price Details</h1>
            <hr/>
            <h5 className="fw-light">Price ({Object.keys(idsInCartObj).length}) : Rs.{data?data.filter((product)=>product._id in idsInCartObj ).reduce((acc,curr)=>(curr.originalPrice * idsInCartObj[curr._id]) + acc  ,0):loading && <p>Loading...</p>}
            </h5>
            <h5 className="fw-light">Total Discount : -Rs.{data? data.filter((product)=>product._id in idsInCartObj ).reduce((acc,curr)=>(curr.originalPrice * idsInCartObj[curr._id]) + acc,0) - data.filter((product)=>product._id in idsInCartObj).reduce((acc,curr)=>acc + (curr.price * idsInCartObj[curr._id]),0):loading && <p>Loading..</p>}</h5>
            <h5 className="fw-light">Delivery Charges: Rs. 500</h5>
            <hr/>
            <h5 className="fw-normal">Total Price: Rs.{data && data.filter((product)=>product._id in idsInCartObj ).reduce((acc,curr)=>(curr.originalPrice * idsInCartObj[curr._id]) + acc,0) + 500}</h5>
            <hr/>
            <h5 className="fw-normal">Choose Address</h5>
            {addressArr.map((address)=> (<>
               <input type="radio" value={address} name="address" onClick={(event)=>setOrderAddressFn(event)} /> <label htmlFor="">{address}</label> <br/>   
            </>))}<br/>
            <button onClick={()=>placeOrderFn()} style={{padding:"5px 80px"}} className="btn btn-primary">Place Order</button>
        </div>
        </div>
       
        </main>
        </>

    )


}

export default Cart;