import Header from "../components/Header"
import useFetch from "../useFetch"
const Wishlist = ({setWishlist,wishlist}) => {
    console.log(wishlist)
 
    const {data,loading,error} = useFetch("http://localhost:3000/products")
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
                    <button style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}>Move to Cart</button>
                    </>
                          
                      </div>   
                    )) :loading && <p>Loading...</p>}
              
            </div>
        </main>
        </>
    )

}

export default Wishlist;