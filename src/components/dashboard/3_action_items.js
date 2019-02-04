import React, { Component } from 'react'
import axios from 'axios'

export default class ActionItem extends Component {
   constructor(){
     super()
     this.state = {
        apiUrl:'https://api2.off-er.ir/user',
        action_list:[],
        
       
    }
   }
  
  
    componentDidMount(){
      var new_request = JSON.parse(JSON.parse(localStorage.getItem('action_request')))
      new_request.page = 2;
        axios({
          url:(`${this.state.apiUrl}${JSON.parse(localStorage.getItem('action_uri'))} `),
          method: 'post',
          data: JSON.stringify(new_request)
          
        }).then(res => {
            this.setState({action_list: res.data.output.items})
            console.log(res);
            
        
          
        })
         
      }
   



  render() {
    return (
      <div>
        
      </div>
    )
  }
}
