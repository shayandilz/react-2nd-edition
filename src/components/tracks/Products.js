import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
 export class Products extends Component {
  
   state={
     itemProduct:{}
     
   }
   
   componentDidMount(){
     const productId = this.props.match.params.id
    axios.post(`http://test.technovaa.ir/offernew/user/get/item`,JSON.stringify({refresh:"true", item_id:productId}))
        .then(res => {
            // console.log(res.data)
            this.setState({itemProduct: res.data.output.items[0]})  
             
        })
        .catch(err => console.log(err))
   }
  render() {
    console.log(this.props);
    
    // console.log(this.state) 
    let product = this.state
    console.log(product)
    if(product === undefined || Object.keys(product.itemProduct).length === 0) {
      return <Spinner />;
    }else{
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
          <div className="card">
            <h5 className="card-header">
            {product.itemProduct.name} Store from <span className="text-secondary"></span>
            <img src={product.itemProduct.thumb_url} alt=""/>
            
              
            </h5>
          </div>
        </React.Fragment>
      )
      
    }
  }
}
