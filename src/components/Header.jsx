import {NavLink} from "react-router-dom"
import "./header.css"

const Header = () => {

 return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container"  >
    <NavLink to="/" style={{color:"#008080",fontSize:"30px",fontFamily:"sans-serif"}} className="navbar-brand" href="#">Teal Electronics</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse container navbar-collapse" id="navbarSupportedContent" >
    <form className="d-flex mx-auto" role="search">
        <input style={{border:"2px solid #008080",width:"500px"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
      </form>
      <ul className="navbar-nav ms-auto">
       <NavLink to="/products/cart"><li className="nav-item"><a  className="nav-link" href=""><img width="40" height="40" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/></a></li></NavLink> 
       <NavLink to="/products/wishlist"> <li className="nav-item"><a style={{color:"#008080",fontSize:"20px"}} className="nav-link" href=""><img width="40" height="40" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/></a></li></NavLink>
      <NavLink to="/userprofile"> <li className="nav-item"><a className="nav-link" href=""><img style={{height:"40px",width:"40px"}} src="https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=000000" alt="" /></a></li></NavLink>
      </ul>
    
    </div>
  </div>
</nav>
    </>
 )
    
}

export default Header