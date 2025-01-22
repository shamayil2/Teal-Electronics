import Header from "../components/Header"
import {useState,useEffect} from "react"

import useFetch from "../useFetch"
const AllProducts = () => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [rating,setRating] = useState(0)
    let [checkedData,setCheckedData] = useState([])
    
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
        const value = event.target.value
        const productNew = checkedData.length>0? data.filter((product)=>checkedData.includes(product.category.name)
        && product.rating>value):data.filter((product)=> product.rating>=value)
        setFilteredProducts([...productNew])
        setRating(value)

    }
   
    function filterHandler(event){
        
        const checked = event.target.checked
        const value = event.target.value
        if(checked){
            const checkedArr = [...checkedData,value]
            let productNew = data.filter((product)=>checkedArr.includes(product.category.name) && product.rating>rating)
            setCheckedData([...checkedArr])
            setFilteredProducts(productNew)
        }else{
           
            let filteredIndexes = []
            for(let i = checkedData.length-1;i>=0;i--){
                if(checkedData[i]===value){
                    checkedData.splice(i,1)
                }

            }

            const productNew = checkedData.length>0?data.filter((product)=>checkedData.includes(product.category.name) 
             && product.rating>rating):data.filter((product)=>product.rating>rating)

            setFilteredProducts([...productNew])
            setCheckedData([...checkedData])
          
        }

    }

    
 
    return(
        <>
        <Header/>
        <div className="row">
            <div className="col-md-3 p-4">
                <div className="container">
                <h4 style={{color:"#008080"}}>Filter By Category</h4>
                <input type="checkbox" value="Smartphones" onClick={filterHandler} /> Smartphones<br/>
                <input type="checkbox" value="Laptops" onClick={filterHandler}/> Laptops<br/>
                <input type="checkbox" value="Smartwatches" onClick={filterHandler}/> Smartwatches<br/>
                <input type="checkbox" value="Tablets" onClick={filterHandler}/> Tablets<br/>
                <input type="checkbox" value="Monitors" onClick={filterHandler}/> Monitors<br/>
                <input type="checkbox" value="Headphones" onClick={filterHandler}/> Headphones<br/>
                </div>
                
                <div className="py-4 container">
                    <h4 style={{color:"#008080"}}>Select Minimum Rating:</h4>
                    <input type="range" min="0" max="5" value={rating} onChange={ratingHandler} />
                    <p>Minimum Rating Selected:{rating}</p>
                </div>

            </div>
            <div className="col-md-9">
            <div className="row container py-4">
            {filteredProducts.length>0 ?filteredProducts.map((product)=>(
                <div key={product._id} className="col-md-3 p-3 text-center">
                    <img className="img-fluid" style={{height:"200px"}} src={product.productImage} alt="" />
                    <div style={{backgroundColor:"#F4F2DE",color:"#008080",padding:"0px 10px"}}>
                    <p style={{fontSize:"20px"}}> {product.title}</p> <span>Rating: {product.rating}</span><br/>
                    <b>Price: ${product.price}</b>
                    </div>
                
                </div>
                
            )):
            
            data && checkedData.length===0 && rating===0?data.map((product)=>(
                <div key={product._id} className="col-md-3 p-3 text-center">
                    <img className="img-fluid" style={{height:"200px"}} src={product.productImage} alt="" />
                    <div style={{backgroundColor:"#F4F2DE",color:"#008080",padding:"0px 10px"}}>
                    <p style={{fontSize:"20px"}}> {product.title}</p> <span>Rating: {product.rating}</span><br/>
                    <b>Price: ${product.price}</b>
                    </div>
                    
                    
                </div>
            )):loading?<p>Loading...</p>:filteredProducts.length===0 && <h2 className="text-center">Products Not Found</h2>}
          </div>
            </div>
        
        </div>

        </>
    )

}

export default AllProducts