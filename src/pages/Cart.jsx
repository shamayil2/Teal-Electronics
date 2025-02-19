import Header from "../components/Header"
import useFetch from "../useFetch"
const Cart = ({idsInCartObj,setIdsInCartObj}) => {
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

        </div>
        
        </>)):loading && <p>Loading..</p>}
        </div>
        </main>
        </>

    )


}

export default Cart;