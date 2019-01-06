import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../../context'
import {Link} from 'react-router-dom'
 class Search extends Component {
     state = {
         productTitle: '',
         apiUrl:'http://test.technovaa.ir/offernew/user/get/items',
         
     }
     findProduct = (dispatch, e) => {
         e.preventDefault()

         axios.post(`${this.state.apiUrl}`,JSON.stringify({query:this.state.productTitle}))
        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.output.items
            })
            
            // this.setState({items: res.data.output.items})
            
        })
        .catch(err => console.log(err))
     }
     onChange = e => {
         this.setState({ [e.target.name]: e.target.value})
     }
  render() {
    return (
      <Consumer>
          {value => {
              const { dispatch } = value;
              return (
                      <form onSubmit={this.findProduct.bind(this, dispatch)}>
                        <div>
                            <div className="form-group" id="form_div">
                                
                                <input type="text" 
                                        className="form-control form-control-md"
                                        placeholder="...Products" 
                                        name="productTitle"
                                        value={this.state.productTitle}
                                        onChange={this.onChange}     
                                />

                                <button className="btn"type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                      </form>   
                    )
          }}
      </Consumer>
    )
  }
}
export default Search