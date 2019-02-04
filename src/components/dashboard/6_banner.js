import React, { Component } from 'react'
import * as  axiosDashboardContext from '../../context'
import axios from 'axios'


export default class Banner1 extends Component {
 state={
  apiUrl:`https://api2.off-er.ir/user/get/carousel`,
  banner: []
 }

 componentDidMount(){
  axiosDashboardContext.axiosDashboard().then((res)=>{
     
    this.setState({data: res.output.sections[6]})
   
    

axios({
      url:(`${this.state.apiUrl}`),
      method: 'post',
      data:JSON.stringify({refresh:"true",carousel_id:this.state.data.id})
    }).then(res => {
      
      this.setState({ banner: res.data.output[0]})
 
    }) 
 }) 
}
  render() {
    const { url } = this.state.banner
 return (
  <React.Fragment>
  <div className="banner1" >
    <img src={url}alt="" />
  </div>
</React.Fragment>
    )    
  }
}

