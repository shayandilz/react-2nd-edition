import React from 'react'
import Search from '../pages/searchComponent/Search'
const Navbar = () => {
  return(
    
      <nav className=" navbar bg-white" id="navbar_main">
        <div className="row container-fluid">
          <div className="col-md-2 ">
            <div className="col-md-6 offset-md-6">
               <h6  className="navbar-brand">Offer</h6>
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