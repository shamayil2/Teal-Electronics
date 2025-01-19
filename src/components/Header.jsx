
import "./header.css"

const Header = () => {

 return(
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#F4F2DE"}}>
  <div className="container"  >
    <a style={{color:"#008080",fontSize:"30px",fontFamily:"sans-serif"}} className="navbar-brand" href="#">Teal Electronics</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse container navbar-collapse" id="navbarSupportedContent" >
    <form class="d-flex mx-auto" role="search">
        <input style={{backgroundColor:"#F4F2DE",border:"2px solid #008080",width:"500px"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
      </form>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a  className="nav-link" href=""><img width="40" height="40" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/></a></li>
        <li className="nav-item"><a style={{color:"#008080",fontSize:"20px"}} className="nav-link" href=""><img width="40" height="40" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/></a></li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
 )
    
}

export default Header