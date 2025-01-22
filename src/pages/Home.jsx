import useFetch from "../useFetch"
import Header from "../components/Header"
import {Link} from "react-router-dom"



const Home = () => {
    
  const {data,loading,error} = useFetch("http://localhost:3000/categories")
  
    
    return(
        <>
       <Header/>
       <main className="container">
        <section>
            <div className="row py-4">
                {data? data.map((dataItem)=>(
                  
                    <div key={dataItem._id} className="col-md-2 text-center" >
                       <Link to={`/products/category/${dataItem._id}`}> <img style={{height:"200px"}} className="img-fluid" src={dataItem.image} alt="" /></Link>
                      
                       <Link style={{textDecoration:"none"}} to={`/products/category/${dataItem._id}`}> <p style={{padding:"5px 30px",backgroundColor:"#F4F2DE",color:"#008080",fontSize:"20px"}}>{dataItem.name}</p></Link>
                    </div>
                )):loading&&<h2 style={{color:"#008080",textAlign:"center"}}>Loading Categories..</h2>}
            </div>
        </section>
        <Link style={{textDecoration:"none"}} to="/products"><h1 style={{color:"#008080",textAlign:"center"}}>Browse All Products</h1></Link>
        <section >
        <div id="carouselExample"  className="carousel slide py-4" >
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
  <div className="carousel-item active">
      
      <img style={{height:"500px"}} src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.og.jpg?202501131558" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"50px",fontWeight:"lighter",color:"white"}} >Apple iPhone 16Pro</h5>
        
      </div>
    </div>
  <div className="carousel-item ">
      <img style={{height:"500px"}} src="https://static.digit.in/default/macbook-air-15-m2-6ab44e29a9.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"50px",fontWeight:"lighter",color:"white"}} >Apple Macbook Pro</h5>
        
      </div>
    </div>
   
    <div className="carousel-item">
      <img style={{height:"500px"}} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/watch_1.jpg?VersionId=ZQz3s1gN5AApm_VOrR_G4TYJNxm_xwnL&size=690:388" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"50px",fontWeight:"lighter"}} >Pixel Watch 3</h5>
        
      </div>
    </div>
 
  </div>
  <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </section>

 <section>
  <div className="row d-flex justify-content-around">
  <div class="card mb-3 col-md-6" style={{width:"600px",padding:"20px",border:"0px solid white",backgroundColor:"#F4F2DE"}} >
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:"200px"}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUW43?wid=532&hei=582&fmt=png-alpha&.v=1712255584961" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color:"#008080"}}>New Arrivals!</h5><br/><br/>
        <h2 class="card-title" style={{color:"#008080"}}>Beats Headphones</h2>
        <p style={{color:"#008080"}} class="card-text">Check out the new Beats Headphones with Dolby Sound!</p>
        
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 col-md-6" style={{width:"600px",padding:"20px",border:"0px solid white",backgroundColor:"#F4F2DE"}} >
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:"200px"}} src="https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/ipad_pro_20.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title" style={{color:"#008080"}}>New Arrivals!</h5><br/><br/>
        <h2 class="card-title" style={{color:"#008080"}}>Ipad Pro</h2>
        <p style={{color:"#008080"}} class="card-text">Have a look at the latest iPad Pro with Retina Display!</p>
        
      </div>
    </div>
  </div>
</div>
  </div>
 </section>
 </main>
        </>
        
    )

}

export default Home