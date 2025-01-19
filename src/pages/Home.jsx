
import Header from "../components/Header"

import {products} from "../App.jsx"
const categories = [
    {name:"Smartphones",image:"https://lh5.googleusercontent.com/proxy/g0iMN7EBqsBUcN4vxJx9qcBPLVcwwIU541JaxrVUUsirTkol6OqNUJAYpWL-LnOLpY_7RuFLo5W_FHiIPDBps_iJKANH3IDUlVzN6fInXxKACldouh_afNZuQ3b1FS09CrsKWSUCIUwtZFqqic7HzUTa6Kf4-5_a3Mb_8WL7AESKZsBvZVe0yfw_-cOZzUAivLYAmDU"},
    {name:"Laptops",image:"https://www.atulhost.com/wp-content/uploads/2024/07/best-laptop-brands.jpg"},
    {name:"Smartwatches",image:"https://www.smartwatchforless.com/wp-content/uploads/2023/07/always-on-display-blog.jpeg"},
    {name:"Tablets",image:"https://nypost.com/wp-content/uploads/sites/2/2022/09/tabletfeat.jpg?quality=75&strip=all"},
    {name:"Headphones",image:"https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Headphones-Lead-Image.png?w=1080"},
    {name:"Monitors",image:"https://image.benq.com/is/image/benqco/monitor-all-series-kv-3-m?$ResponsivePreset$&fmt=png-alpha"}
]

const Home = () => {
    
    
    return(
        <>
       <Header/>
       <main className="container">
        <section>
            <div className="row py-4">
                {categories.map((category)=>(
                    <div className="col-md-2 text-center" >
                        <img style={{height:"200px"}} className="img-fluid" src={category.image} alt="" />
                        <p style={{padding:"5px 30px",backgroundColor:"#F4F2DE",color:"#008080",fontSize:"20px"}}>{category.name}</p>
                    </div>
                ))}
            </div>
        </section>
        <section >
        <div id="carouselExample"  className="carousel slide py-4" >
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
  <div className="carousel-item active">
      <img style={{height:"500px"}} src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"50px",fontWeight:"lighter",color:"white"}} >Apple Macbook Pro</h5>
        
      </div>
    </div>
    <div className="carousel-item ">
      
      <img style={{height:"500px"}} src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.og.jpg?202501131558" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:"50px",fontWeight:"lighter",color:"white"}} >Apple iPhone 16Pro</h5>
        
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