import React, { Component } from 'react'
import logo from '../layout/editor.png'
import axios from 'axios'
import Swiper from 'react-id-swiper';
export default class Editors extends Component {
  constructor(){
    super();
    this.state={
      editorItem:[],
      
    }
    
  }  

    componentDidMount(){
        
       axios.post(`https://api2.off-er.ir/user/get/editor`,JSON.stringify({refresh:"true", editor_id:13}))
           .then(res => {
              //  console.log(res.data)
               this.setState({editorItem: res.data.output.items})  
                
           })
           .catch(err => console.log(err))
      }
      
  render() {
    const params = {
      ContainerEl: 'section',
      WrapperEl: 'section',
      containerClass:'containerClasss',
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
      autoplay:true,
      loop: true,
      loopFillGroupWithBlank: false,
      rebuildOnUpdate: true,
      crossFade:true,
      
    };
    const editorsItems = this.state.editorItem.map((item, index) => {
      return(
        <div key={index.toString()} id="editors">
              <div className="col-md-12 mb-5" >
              
                <div className="wrapper-contain">
                   <div className="figure">
                      <img className="logo_editor" src={logo} alt=""/>
                      <h5 className="figure-caption mt-1 pr-3">{item.off_percent}%</h5>
                   </div>
                      <img className="card-img-top" src={item.thumb_url} alt=""/>
                      <h6>{item.name}</h6>
                      <p>{item.last_price}</p>
                      <span>{item.current_price}</span>
                      <button type="button" className=" btn btn-danger btn-sm btn-block">Buy From {item.store_name}<a href={item.page_url}></a></button>
                </div> 
                     
              </div>
             
        </div>
        
        
      )
    })
    return (
      <Swiper className="mb-4" {...params}>{editorsItems}</Swiper>
    )
  }
}
