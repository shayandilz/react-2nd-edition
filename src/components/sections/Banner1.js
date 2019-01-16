import React, { Component } from 'react'
import axios from 'axios'
export default class Banner1 extends Component {
    state = {
        banner1: [],
        apiUrl:'https://api2.off-er.ir/user/get/carousel' 
    };
      componentDidMount(){
        axios.post(`${this.state.apiUrl}`,JSON.stringify({carousel_id:"40",
        refresh:"true"}))
        .then(res => {
            // console.log(res.data)
            this.setState({banner: res.data.output[0].url}) 
             
        })
        .catch(err => console.log(err))
      } 
  render() {
    const banner = this.state.banner
    // console.log(banner);
    
    return (
      
      <div className="banner1 mt-3" >
      <img src={banner}alt="" />
      </div>
            
    
    )
  }
}

