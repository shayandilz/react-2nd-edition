import React, { Component } from 'react'

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
         dispatch:action => this.setState(state => reducer(state, action))
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