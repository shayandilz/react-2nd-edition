import React, { Component } from 'react'

import axios from 'axios'
export default class Banner2 extends Component {
    state = {
        banner1: [],
        apiUrl:'https://api2.off-er.ir/user/get/carousel' 
    };
      componentDidMount(){
        axios.post(`${this.state.apiUrl}`,JSON.stringify({carousel_id:"43",
        refresh:"true"}))
        .then(res => {
            // console.log(res.data)
            this.setState({banner0: res.data.output[0].url}) 
            this.setState({banner1: res.data.output[1].url}) 
             
        })
        .catch(err => console.log(err))
      } 
  render() {
    const banner = this.state
    // console.log(banner);
    
    return (
        <div id="banner2" className="col-md-12">
            
                    <img src={banner.banner0} alt=""/>
              
          
                    <img src={banner.banner1} alt=""/>
          
            
        </div>
        
     
    
    )
  }
}
