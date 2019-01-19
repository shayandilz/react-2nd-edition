import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

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
         apiCarouselUrl:'https://api2.off-er.ir/user/get/carousel', 
         banner1: [],
         banner2:[],
         banner3:[],
         items:[],
         dispatch:action => this.setState(state => reducer(state, action))
     }
     componentDidMount(){
        axios.post(`${this.state.apiCarouselUrl}`,JSON.stringify({carousel_id:"40",refresh:"true"}))
        .then(res => {
            // console.log(res.data)
            this.setState({banner1: res.data.output[0].url}) 
        return(
        axios.post(`${this.state.apiCarouselUrl}`,JSON.stringify({carousel_id:"43",refresh:"true"}))
        .then(res => {
            // console.log(res.data)
            this.setState({banner2: res.data.output})
        return(
        axios.post(`${this.state.apiCarouselUrl}`,JSON.stringify({carousel_id:"42",refresh:"true"}))
        .then(res => {
            // console.log(res.data)
            this.setState({banner3: res.data.output[0].url})
             
             
        })
        .catch(err => console.log(err))
        )
        })
        .catch(err => console.log(err)))     
        })
        .catch(err => console.log(err))
      } 
     
  render() {
    //   console.log(this.state)
    return (
     <Context.Provider value={this.state}>
     
            {this.props.children}
     </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer