import Header from "../components/Header"
import useFetch from "../useFetch"
const Wishlist = ({setWishlist,wishlist,idsInCartObj,setIdsInCartObj}) => {
    console.log(wishlist)
 
    const {data,loading,error} = useFetch("http://localhost:3000/products")
    function removeFromWishlist(productId){
      delete wishlist[productId]
      
      setWishlist({...wishlist})
    }
    //Function to add the product id in object containing the product ids which are in cart.
    function addIdToCartObj(productId){
      if(productId in idsInCartObj){
        setIdsInCartObj({...idsInCartObj,[productId]:idsInCartObj[productId]+1})
      }else{
        setIdsInCartObj({...idsInCartObj,[productId]:1})
      }
      
      

    }

    return(
        <>
        <Header/>
        <main className="container py-4">
            <h1 className="text-center">My Wishlist</h1>
            <div className="row py-4">
            {data? data.filter((product)=>[product._id] in wishlist).map((product)=> (
                      <div className="col-md-3 text-center pb-3">
                    <>
                      <img style={{height:"200px"}} src={product.productImage} alt="" />
                      <p style={{padding:"10px",backgroundColor:"#F4F2DE",color:"#008080"}}>{product.title}<br/>Price: ${product.price}</p>
                     {product._id in idsInCartObj?  <button style={{padding:"0px 60px",backgroundColor:"#F4F2DE",color:"#008080"}}>Go to Cart</button>:<button onClick={(id)=>addIdToCartObj(product._id)} style={{padding:"5px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}>Move to Cart</button>} 

                      <button onClick={(id)=>removeFromWishlist(product._id)} style={{padding:"0px 30px",backgroundColor:"#FF7F7F",color:"white",border:"1px solid #FF7F7F"}}>Remove From Wishlist</button>
                    </>
                          
                      </div>   
                    )) :loading && <p>Loading...</p>}
              
            </div>
        </main>
        </>
    )

}

export default Wishlist;