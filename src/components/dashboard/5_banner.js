import React, { Component } from 'react'
import * as  axiosDashboardContext from '../../context'
import axios from 'axios'

export default class Banner2 extends Component {
    state={
        apiUrl:`https://api2.off-er.ir/user/get/carousel`,
        banner: []
       }
       componentDidMount(){
        axiosDashboardContext.axiosDashboard().then((res)=>{
           
          this.setState({data: res.output.sections[5]})
       
    
      axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data:JSON.stringify({refresh:"true",carousel_id:this.state.data.id})
          }).then(res => {
            
            this.setState({ banner: res.data.output})
     
            
          }) 
       }) 
      }   
      
render() {
const bannerItems = this.state.banner.map((item, index) => {
    return(
        <img key={index.toString()} src={item.url} alt="banner" />
    )
})
    return(
        <div  id="banner2" className="col-md-12">
          {bannerItems}        
        </div>  
                
    )
    
  }
}
