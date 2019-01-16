import React from 'react'
import Search from '../pages/searchComponent/Search'
import Offerlogo from './new_logo_offer.png'
const Navbar = () => {
  return(
    
      <nav id="navbar_main">
        <div className=" container"> 
          <div className="row justify-content-cm-center">
              <div className="col-md-1"><img src={Offerlogo} alt="" /></div>
                <div className="col-md-10">
                  <Search /> 
                </div>
              <div className="col-md-1">
                  <i className="fas fa-user-circle"><span className="register">Register</span></i>  
              </div>
          </div>   
        </div>
      </nav>
    
    
  ) 
}   
  


export default Navbar;


