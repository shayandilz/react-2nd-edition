import React from 'react'
import Search from '../tracks/Search'
const Navbar = () => {
  return(
    
      <nav className=" navbar bg-white" id="navbar_main">
        <div className="row container-fluid">
          <div className="col-md-2 ">
            <div className="col-md-6 offset-md-6">
               <a className="navbar-brand">Offer</a>
            </div> 
          </div>  
        <div className="col-md-8 col-sm-12">
          <Search /> 
        </div> 
          <div className="col-md-2">
            <div className="col-md-5">
               <i className="fas fa-user-circle"><span className="register">Register</span></i>
            </div> 
          </div>   
        </div>   
        </nav>
    
    
  ) 
}   
  


export default Navbar;