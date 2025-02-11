import Header from "../components/Header"
import {useState,useEffect,useRef} from "react"
import {Link} from "react-router-dom"
import useFetch from "../useFetch"
const AllProducts = ({setWishlist,wishlist,inWishlist,setInWishlist}) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [rating,setRating] = useState(0)
    let [checkedData,setCheckedData] = useState([])
  
    let [sort,setSort] = useState("")
    const filterRef1 = useRef()
    const filterRef2 = useRef()
    const filterRef3 = useRef()
    const filterRef4 = useRef()
    const filterRef5 = useRef()
    const filterRef6 = useRef()
    const sortRef1 = useRef()
    const sortRef2 = useRef()

      useEffect(() => {
            setLoading(true);
            fetch("http://localhost:3000/products")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                })
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false));
        }, []);
    
  
    console.log(data)
   
    let [filteredProducts,setFilteredProducts] = useState([])

    function ratingHandler(event){
        let sortedArr;
        const value = event.target.value
        const productNew = checkedData.length>0? data.filter((product)=>checkedData.includes(product.category.name)
        && product.rating>value):data.filter((product)=> product.rating>=value)
        if(sort.length>0){
          sort==="ascending"?  sortedArr = productNew.sort((a,b)=>a.price-b.price): sortedArr = productNew.sort((a,b)=>b.price-a.price)
            setFilteredProducts(sortedArr)
        }else{
            setFilteredProducts([...productNew])
        }
       
        setRating(value)

    }
   
    function filterHandler(event){
        let sortedArr;
        const checked = event.target.checked
        console.log(checked)
        const value = event.target.value
        if(checked){
            const checkedArr = [...checkedData,value]
            let productNew = data.filter((product)=>checkedArr.includes(product.category.name) && product.rating>rating)
            setCheckedData([...checkedArr])
            if(sort.length>0){
                sort==="ascending"?  sortedArr = productNew.sort((a,b)=>a.price-b.price): sortedArr = productNew.sort((a,b)=>b.price-a.price)
                  setFilteredProducts(sortedArr)
              }else{
                  setFilteredProducts([...productNew])
              }
            // setFilteredProducts(productNew)
        }else{
           
            let filteredIndexes = []
            for(let i = checkedData.length-1;i>=0;i--){
                if(checkedData[i]===value){
                    checkedData.splice(i,1)
                }

            }

            const productNew = checkedData.length>0?data.filter((product)=>checkedData.includes(product.category.name) 
             && product.rating>rating):data.filter((product)=>product.rating>rating)
             if(sort.length>0){
                sort==="ascending"?  sortedArr = productNew.sort((a,b)=>a.price-b.price): sortedArr = productNew.sort((a,b)=>b.price-a.price)
                  setFilteredProducts(sortedArr)
              }else{
                  setFilteredProducts([...productNew])
              }
            // setFilteredProducts([...productNew])
            setCheckedData([...checkedData])
          
        }

    }
    
    function sortHandler(event){
        let sortedArr;
        const value = event.target.value
        const productNew = checkedData.length>0? data.filter((product)=>checkedData.includes(product.category.name)
        && product.rating>rating):data.filter((product)=> product.rating>=rating)
        
        value==="ascending"?  sortedArr = productNew.sort((a,b)=>a.price-b.price): sortedArr = productNew.sort((a,b)=>b.price-a.price)
            setFilteredProducts([...sortedArr])
        
        setSort(value)
    }

    function buttonHandler(){
        setFilteredProducts([])
        setRating(0)
       
        setCheckedData([])
        filterRef1.current.checked=false
        filterRef2.current.checked=false
        filterRef3.current.checked=false
        filterRef4.current.checked=false
        filterRef5.current.checked=false
        filterRef6.current.checked=false
        sortRef1.current.checked = false
        sortRef2.current.checked = false
        
    }

    console.log(checkedData)
    console.log(filteredProducts)

    function wishlistHandler(productId){
        
        
        if(inWishlist.includes(productId)){
            const index = inWishlist.indexOf(productId)
            inWishlist.splice(index,1)
            setInWishlist([...inWishlist])
            delete wishlist[productId]
        }else{
            setInWishlist([...inWishlist,productId])
            setWishlist({...wishlist,[productId]:1})
        }
       



    }

    console.log(wishlist)
    console.log(inWishlist)
    return(
        <>
        <Header/>
       
        <div className="row">
            <div className="col-md-3 p-4">
                <div className="container">
                <h4 style={{color:"#008080"}}>Filter By Category</h4>
                <input type="checkbox" ref={filterRef1} value="Smartphones" onClick={filterHandler} /> Smartphones<br/>
                <input type="checkbox" ref={filterRef2} value="Laptops" onClick={filterHandler}/> Laptops<br/>
                <input type="checkbox" ref={filterRef3} value="Smartwatches" onClick={filterHandler}/> Smartwatches<br/>
                <input type="checkbox" ref={filterRef4} value="Tablets" onClick={filterHandler}/> Tablets<br/>
                <input type="checkbox" ref={filterRef5} value="Monitors" onClick={filterHandler}/> Monitors<br/>
                <input type="checkbox" ref={filterRef6} value="Headphones" onClick={filterHandler}/> Headphones<br/>
                </div>
                
                <div className="py-4 container">
                    <h4 style={{color:"#008080"}}>Select Minimum Rating:</h4>
                    <input type="range" min="0" max="5" value={rating} onChange={ratingHandler} />
                    <p>Minimum Rating Selected:{rating}</p>
                </div>
                <div className="py-4 container">
                    <h4 style={{color:"#008080"}}>Sort By Price:</h4>
                    <input type="radio" name="sort" ref={sortRef1} value="ascending" onChange={sortHandler} /> <label htmlFor="">Low To High</label><br/>
                    <input type="radio" name="sort" ref={sortRef2} value="descending" onChange={sortHandler}/> <label htmlFor="">High To Low</label>
                </div>
                <div className="py-4 container">
                <button onClick={buttonHandler} style={{padding:"0px 20px",backgroundColor:"#008080",color:"#F4F2DE"}}>Clear Filters</button>
                </div>
                

            </div>
            <div className="col-md-9">
            <div className="row container py-4">
            {filteredProducts.length>0 ?filteredProducts.map((product)=>(
                <div key={product._id} className="col-md-3 p-3 text-center">
                  <Link to={`/products/productdetails/${product._id}`}> <img className="img-fluid" style={{height:"200px"}} src={product.productImage} alt="" /></Link> 
                    <div style={{backgroundColor:"#F4F2DE",color:"#008080",padding:"0px 10px"}}>
                    <p style={{fontSize:"20px"}}> {product.title}</p> <span>Rating: {product.rating}</span><br/>
                    <b>Price: ${product.price}</b>
                    </div>
                    <button className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}  onClick={(id)=>clickHandler(product._id)}>Add to Cart</button>
                    {inWishlist.includes(product._id)?(<button onClick={(id)=>wishlistHandler(product._id)} className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#F4F2DE",color:"#008080"}} >Remove from Wishlist</button>) : (<button onClick={(id)=>wishlistHandler(product._id)} className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}  >Add to Wishlist</button>) } 

                </div>  
                
            )):
            
            data && checkedData.length===0 && rating===0?data.map((product)=>(
                <div key={product._id} className="col-md-3 p-3 text-center">
                  <Link to={`/products/productdetails/${product._id}`}>   <img className="img-fluid" style={{height:"200px"}} src={product.productImage} alt="" /></Link>
                    <div style={{backgroundColor:"#F4F2DE",color:"#008080",padding:"0px 10px"}}>
                    <p style={{fontSize:"20px"}}> {product.title}</p> <span>Rating: {product.rating}</span><br/>
                    <b>Price: ${product.price}</b>
                    </div>
                    <button className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}  onClick={(id)=>clickHandler(product._id)}>Add to Cart</button>
                   {inWishlist.includes(product._id)?(<button onClick={(id)=>wishlistHandler(product._id)} className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#F4F2DE",color:"#008080"}} >Remove from Wishlist</button>) : (<button onClick={(id)=>wishlistHandler(product._id)} className="mb-4"  style={{padding:"0px 60px",backgroundColor:"#008080",color:"#F4F2DE"}}  >Add to Wishlist</button>) } 

                    
                    
                </div>
            )):loading?<p>Loading...</p>:filteredProducts.length===0 && <h2 className="text-center">Products Not Found</h2>}
          </div>
            </div>
        
        </div>

        </>
    )

}

export default AllProducts