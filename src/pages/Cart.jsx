import Header from "../components/Header"
import useFetch from "../useFetch"
const Cart = ({idsInCartObj,setIdsInCartObj,setWishlist,wishlist}) => {
    console.log(idsInCartObj)
    const {data,loading,error} = useFetch("http://localhost:3000/products")
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

    console.log(wishlist)

    return(
        <>
        <Header/>
        <main className="container">
        <h1 className="text-center">My Cart</h1>
        <div className="row">
        {data?data.filter((product)=>product._id in idsInCartObj).map(product=> (<>
        <div className="col-md-3">
         <img style={{height:"200px"}} className="img-fluid" src={product.productImage} alt="" />   
        <h3>{product.title}</h3>
        <p>Quantity:<span><button onClick={(id)=>increaseQuantityInCart(product._id)}>+</button><input type="text" className="text-center" style={{width:"30px"}} value={idsInCartObj[product._id]}/><button onClick={(id)=>decreaseQuantityInCart(product._id)}>-</button></span></p>
        <button style={{padding:"0px 30px",backgroundColor:"#FF7F7F",color:"white",border:"1px solid #FF7F7F"}} onClick={(id)=>removeIdFromCart(product._id)}>Remove from Cart</button>
        <button onClick={(id)=>moveToWishlistFromCart(product._id)} style={{padding:"0px 35px",backgroundColor:"#008080",color:"#F4F2DE"}}>Move to Wishlist</button>
        </div>
        
        </>)):loading && <p>Loading..</p>}
        </div>
        </main>
        </>

    )


}

export default Cart;