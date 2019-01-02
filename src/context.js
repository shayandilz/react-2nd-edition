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
         items:[],
         heading: 'Products',
         dispatch:action => this.setState(state => reducer(state, action))
     }
     componentDidMount(){
        axios.post(`http://test.technovaa.ir/offernew/user/get/items`,JSON.stringify({query:"iphone"}))
        .then(res => {
            // console.log(res.data)
            this.setState({items: res.data.output.items})
            
        })
        .catch(err => console.log(err))
     }
  render() {
      console.log(this.props.children)
    return (
     <Context.Provider value={this.state}>
            {this.props.children}
     </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer