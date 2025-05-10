import Header from "../components/Header"
import useFetch from "../useFetch"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
const Cart = ({idsInCartObj,setIdsInCartObj,setWishlist,wishlist,placedOrderArr,setPlacedOrderArr,addressArr, setAddressArr}) => {
    console.log(idsInCartObj)
    const {data,loading,error} = useFetch("https://teal-electronics-backend.vercel.app/products")
    const [orderAddress,setOrderAddress] = useState("")
    const [alertRemove,setAlertRemove] = useState(false)
    const [itemNumIncAlert,setItemNumIncAlert] = useState(false)
    const [itemNumDecAlert,setItemNumDecAlert] = useState(false)
    const [moveToWishlist,setMoveToWishlist] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setItemNumDecAlert(false)
            setItemNumIncAlert(false)
        }, 4000);

        setTimeout(() => {
            setMoveToWishlist(false)
        }, 4000);

    },[idsInCartObj],[setWishlist])

    useEffect(()=> {
        setTimeout(() => {
            setAlertRemove(false)
        }, 4000);

    },[idsInCartObj])

    function increaseQuantityInCart(productId){
        setIdsInCartObj({...idsInCartObj,[productId]:idsInCartObj[productId]+1})
        setItemNumIncAlert(true)
    }

    function decreaseQuantityInCart(productId){
        if(idsInCartObj[productId]>0){
            setIdsInCartObj({...idsInCartObj,[productId]:idsInCartObj[productId]-1})
            setItemNumDecAlert(true)
        }
       
    }

    function removeIdFromCart(productId){

       delete idsInCartObj[productId] 
        setIdsInCartObj({...idsInCartObj})
        setAlertRemove(true)

    }

    function moveToWishlistFromCart(productId){

        if(productId in wishlist){

        }else{
            setWishlist({...wishlist,[productId]:1})
            setMoveToWishlist(true)
        }
    }

     async function postDataInDb(orders){

        const ordersObj = {
            product:Object.keys(orders),
            address:orders.address
        }

        try{
            
            const response = await fetch("http://localhost:3000/products/orderedproducts",{
                method:"POST",
                body:JSON.stringify(ordersObj),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            const result = await response.json()

            console.log(result)

        }

        catch(error){
            console.log("Cant Post The Orders",error)
        }

    }

    async function placeOrderFn (){
    
         try{
            const placedOrdersObj = {...idsInCartObj,address:orderAddress}
            const ordersObj = {
                 products: [],
                address:placedOrdersObj.address
                // address:placedOrdersObj.address
            }
            for(const productId in placedOrdersObj){
                if(productId!=="address"){
                    ordersObj.products.push({item:productId,quantity:placedOrdersObj[productId]})

                }
            }  
            console.log(JSON.stringify(ordersObj))
            
            const response = await fetch("http://localhost:3000/products/orderedproducts",{
                method:"POST",
                body:JSON.stringify(ordersObj),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(!response.ok){
                console.log("Error occured !")
            }else{
                const result = await response.json()
                console.log(result)
                setPlacedOrderArr({...idsInCartObj,address:orderAddress})

                setIdsInCartObj({})
                setOrderAddress("")
                alert("Order Placed Successfully!")
            }

         }

         catch(error){
            console.log("Error occurred",error)
         }
    

    }

    function setOrderAddressFn(event){

        setOrderAddress(event.target.value)

    }

    return(
        <>
        <Header/>
        {itemNumIncAlert ?
            <>
            <div className="bg-warning text-light text-center fixed-top py-3 " style={{width:"40%",margin:"0 auto"}} >
            <p style={{marginBottom:"0px"}}>Item Quantity Increased</p>
        </div></>: itemNumDecAlert && <div className="bg-warning text-light text-center fixed-top py-3 " style={{width:"40%",margin:"0 auto"}} >
            <p style={{marginBottom:"0px"}}>Item Quantity Decreased</p>
        </div>


            
        }
        {alertRemove && <>
            <div className="bg-danger text-light text-center fixed-top " style={{width:"40%",margin:"0 auto"}} >
            <p style={{marginBottom:"0px"}}>Item Removed from Cart</p>
        </div>
        </>}
        { moveToWishlist &&
            <>
            <div className="bg-info text-light text-center fixed-top py-3  " style={{width:"40%",margin:"0 auto"}} >
            <p style={{marginBottom:"0px"}}>Item Moved To Wishlist</p>
        </div>
            </>
        }
        <main className="container py-4">
        <h1 className="text-center">My Cart</h1>
        <div className="row">
            <div className="col-md-9">
                <div className="row">
        {data?data.filter((product)=>product._id in idsInCartObj).map(product=> (<>
        <div className="col-md-4">
        <Link to={`/products/productdetails/${product._id}`}> <img style={{height:"200px"}} className="img-fluid" src={product.productImage} alt="" /> </Link>  
        <h3>{product.title}</h3>
        <p>{product.originalPrice}</p>
        <p>Quantity:<span><button onClick={(id)=>increaseQuantityInCart(product._id)}>+</button><input type="text" className="text-center" style={{width:"30px"}} value={idsInCartObj[product._id]}/><button onClick={(id)=>decreaseQuantityInCart(product._id)}>-</button></span></p>
        <button style={{padding:"0px 30px",backgroundColor:"#FF7F7F",color:"white",border:"1px solid #FF7F7F"}} onClick={(id)=>removeIdFromCart(product._id)}>Remove from Cart</button>
       {product._id in wishlist? <button style={{padding:"0px 35px",backgroundColor:"#F4F2DE",color:"#008080",border:"1px solid #F4F2DE"}}><Link  to="/products/wishlist" style={{color:"#008080",textDecoration:"none"}}>Go To Wishlist</Link></button>:<button onClick={(id)=>moveToWishlistFromCart(product._id)} style={{padding:"0px 35px",backgroundColor:"#008080",color:"#F4F2DE"}}>Move to Wishlist</button>} 
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