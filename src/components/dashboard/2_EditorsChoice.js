import React, { Component } from 'react'
import logo from '../layout/editor.png'
import axios from 'axios'
import Swiper from 'react-id-swiper';
import * as  axiosDashboardContext from '../../context'

export default class Editors extends Component {
  constructor(){
    super();
    this.state={
      apiUrl:`https://api2.off-er.ir/user/get/editor`,
      editorItem:[],
    } 
  }  
    componentDidMount(){
      axiosDashboardContext.axiosDashboard().then((res)=>{
     
        this.setState({data: res.output.sections[2]})

    axios({
          url:(`${this.state.apiUrl}`),
          method: 'post',
          data:JSON.stringify({refresh:"true",editor_id:this.state.data.id})
        }).then(res => {
          const editorItem = res.data.output.items
          this.setState({ editorItem})
        }) 
     }) 
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
        <div className="col-md-4" key={index.toString()} id="editors">
             
                   <div className="figure">
                      <img className="logo_editor" src={logo} alt=""/>
                      <h5 className="figure-caption mt-1 pr-3">{item.off_percent}%</h5>
                   </div>
                   <div>
                      <img className="img_editors" src={item.thumb_url} alt=""/>
                   </div>
                   <div className="col-sm-12"><p className="nowrap">{item.name}</p></div> 
                   <div><p>{item.last_price}</p><span>{item.current_price}</span></div> 
                   <div> <button type="button" className=" btn btn-danger btn-sm btn-block">Buy From {item.store_name}<a href='_blank'></a></button></div>   
        </div>    
      )
    })
    return (
      <Swiper className="mb-4" {...params}>{editorsItems}</Swiper>
    )
  }
}
