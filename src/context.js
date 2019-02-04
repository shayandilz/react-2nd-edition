import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();


export const axiosDashboard = () => {
    const URL = (`https://api2.off-er.ir/user/dashboard`);
    const proxyurl = (`https://cors-anywhere.herokuapp.com/`)
    return axios(URL, {
      method: 'POST',
      data: JSON.stringify({refresh:"true"}),
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
       
  };


const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TRACKS':
        return {
            ...state,
            items: action.payload,
            heading: 'Search Results'
        };
        default:
        return state
    }
}

 export class Provider extends Component {
     state = { 
         items:[],
         apiUrl:'https://api2.off-er.ir/user/get/action',
         data_cat:[],
         actionItem:[],
         icons: [],
         uri:[],
         request:[],
         action_uri:[],
         action_request:[],
         editors:[],
         Banner1:[],
         dispatch:action => this.setState(state => reducer(state, action))
     }
     componentDidMount(){
        axiosDashboard().then((res)=>{
            
      this.setState({
        data_cat: res.output.sections[1],
        actionItem: res.output.sections[3]
      })
      const{ id } = this.state.data_cat
      const{ id:action_id } = this.state.actionItem
      
      
      axios({
        url:(`${this.state.apiUrl}`),
        method: 'post',
        data: JSON.stringify({refresh:"true",action_id:id})
      }).then(res => {
        this.setState({uri: res.data.output.uri,
                       request:res.data.output.request                                 
        })
      axios({
        url:(`${this.state.apiUrl}`),
        method:`post`,
        data:JSON.stringify({refresh:"true",action_id:action_id})
      }).then(res => {
        this.setState({action_uri: res.data.output.uri,
        action_request: res.data.output.request})
        
      })
        
      }) 
   }) 
   
}
componentWillUpdate(nextProps, nextState){

  
    localStorage.setItem('uri',(nextState.uri))
    localStorage.setItem('request',(nextState.request))
    localStorage.setItem('action_uri',(nextState.action_uri))
    localStorage.setItem('action_request',(nextState.action_request))
   
  }   
  render() {
   
    return (
     <Context.Provider value={this.state}>
     
            {this.props.children}
     </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer