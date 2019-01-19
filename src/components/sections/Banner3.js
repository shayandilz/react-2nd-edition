import React, { Component } from 'react'
import {Consumer} from '../../context'
export default class Banner3 extends Component {
   
       
  render() {
   
    
    return (
      <Consumer>
      {value => {
          const {banner3} = value
         //  console.log(banner1);
          return(
           <React.Fragment>
           <div className="banner1 mt-3" >
             <img src={banner3}alt="" />
           </div>
        </React.Fragment>
        
          )
          
          
      }}
    </Consumer>
      
            
    
    )
  }
}

