import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Navbar from '../layout/Navbar'
import Category from '../sections/Category'
 export class Products extends Component {
  
   state={
     itemProduct:{},
     itemInfo:[]
   }
   
   componentDidMount(){
     const productId = this.props.match.params.id
    axios.post(`https://api2.off-er.ir/user/get/item`,JSON.stringify({refresh:"true", item_id:productId}))
        .then(res => {
            // console.log(res.data)
            this.setState({itemProduct: res.data.output.items[0]})
            this.setState({itemInfo: res.data.output.items[0].props[0]})  
             
        })
        .catch(err => console.log(err))
   }
  render() {
    // console.log(this.props);
    
    console.log(this.state.itemInfo) 
    let product = this.state
    // console.log(product)
    if(product === undefined || Object.keys(product.itemProduct).length === 0) {
      return <Spinner />;
    }else{
      return (
        <React.Fragment>
          <Navbar/>
       <div id="category">
            <div className="container-fluid" >
                <div className="row justify-content-end">
                  <div className="col-3">
                      <Category />
                  </div>
                </div>  
            </div>
          </div>
          <Link to="/searchresult" className="btn btn-dark btn-sm mb-4 ml-4 mt-4">Go Back</Link>
            <div className="container">
            <div id="products" className="row justify-content-sm-center">
              <div className="products_info col-md-6">
                  <h6>{product.itemProduct.name}</h6>
                    <div className="col-md-6">
                      <img src={product.itemProduct.store.thumb_url} />
                      
                     </div>
                     <div className="products_info_extra" style={{textAlign:"right"}}>
                          <h5 className="mt-4 mr-2 ml-4">{product.itemInfo.key}</h5><br/><p className="mr-2 ml-4 mb-4">{product.itemInfo.value}</p>
                     </div>
                     <div className="col-md-12">
                          <button type="button" className="btn_active btn btn-danger">{product.itemProduct.current_price}<a href={product.itemProduct.page_url}></a></button>
                          <button type="button" className="btn_disabled btn btn-dark btn-outline-dark" disabled>{product.itemProduct.last_price}<a href={product.itemProduct.page_url}></a></button>
                     </div>
                </div>
                     <div className="product_img col-md-4 offset-1"> 
                          <img src={product.itemProduct.thumb_url} alt=""/>
                     </div>
            </div>
          
            </div>
          
        </React.Fragment>
      )
      
    }
  }
}

