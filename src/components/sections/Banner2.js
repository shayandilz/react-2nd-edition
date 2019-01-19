import React, { Component } from 'react'
import {Consumer} from '../../context'

export default class Banner2 extends Component {
   
      
  render() {
   
    return (
        <Consumer>
        {value => {
            const { banner2 } = value
            // console.log(banner2);
            return(
                <React.Fragment>
                    
                    <div id="banner2" className="col-md-12">
                            {banner2.map((item,index) => {
                                return(   
                                        <img   key={index.toString()} src={item.url} alt=""/>
                                )
                                })}
                    </div>
                </React.Fragment>
                
            )
        }}
    </Consumer>
     
    
    )
  }
}
