import {Link} from "react-router-dom"

const SearchResults = ({filteredProducts}) => {

    return(
        <>
        {filteredProducts.length!==0 && <>
       <section>
       <div className="row">
        {filteredProducts.map(product=>(
          <div key={product._id} className="col-md-2 p-3 text-center">
          
                  <Link to={`/products/productdetails/${product._id}`}>   <img className="img-fluid" style={{height:"200px"}} src={product.productImage} alt="" /></Link>
                    <div style={{backgroundColor:"#F4F2DE",color:"#008080",padding:"0px 10px"}}>
                    <p style={{fontSize:"20px"}}> {product.title}</p> <span>Rating: {product.rating}</span><br/>
                    <b>Price: ${product.originalPrice}</b>
                    </div>
          </div>
        ))}
       </div>
       </section>
       </>}
        </>
    )


}

export default SearchResults;