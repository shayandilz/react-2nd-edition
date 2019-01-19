import React, { Component } from 'react'
import {Consumer} from '../../context'
export default class Banner1 extends Component {
 
  render() {
 return (
     <Consumer>
       {value => {
           const {banner1} = value
          //  console.log(banner1);
           return(
            <React.Fragment>
            <div className="banner1 mt-3" >
              <img src={banner1}alt="" />
            </div>
         </React.Fragment>
           )
         }}
     </Consumer>
    )
  }
}

 
