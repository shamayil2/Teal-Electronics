import {useParams} from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import {Link} from "react-router-dom"
import {useState} from "react"

const CategoryProducts = ({setWishlist,wishlist,idsInCartObj,setIdsInCartObj}) => {
    const categoryObj = useParams()
    console.log(categoryObj.categoryId)
    const {data,loading,error} = useFetch(`http://localhost:3000/products/category/${categoryObj.categoryId}`)
    console.log(data)
    const [inCart,setinCart] = useState([])
    
    const clickHandler = (productId) => {
        setIdsInCartObj({...idsInCartObj,[productId]:1})
    }
    
    function addToWishlistFn(productId){

        setWishlist({...wishlist,[productId]:1})

    }

    return(
        <>
        <Header/>
        <main className="container">
        {data?(<>
        <h1 className="text-center py-4" style={{color:"#008080"}}>Check out our latest {data[0].category.name}</h1>
     
         <div className="row">
         {data.map((product)=>(
           <div className="col-md-3 text-center">
               <img style={{height:"200px"}} src={product.productImage} alt="" />
               <p style={{padding:"10px",backgroundColor:"#F4F2DE",color:"#008080"}}>{product.title}<br/>Price: ${product.price}</p>
               {/* Checks if product id is in inCart array or not and then decides to proceed. */}
               {product._id in wishlist?  <button className="m-2" style={{padding:"0px 60px",backgroundColor:"#F4F2DE"}}><Link to="/products/wishlist"style={{color:"#008080",textDecoration:"none"}}>Go to Wishlist</Link></button>
                   : <button onClick={(productId)=>addToWishlistFn(product._id)} className="m-2" style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}>Add to Wishlist</button>
            }
               <br/>
               {product._id in idsInCartObj?<Link to="/"><button className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#F4F2DE",color:"#008080"}}><Link style={{color:"#008080",textDecoration:"none"}} to="/products/cart">Go To Cart</Link></button>
               </Link>:<button className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}  onClick={(id)=>clickHandler(product._id)}>Add to Cart</button>}
               
               
           </div>
        ))}
            </div>
        </>):loading&& <p>Loading...</p>}
        </main>
        
        

        </>
    )

}

export default CategoryProducts;