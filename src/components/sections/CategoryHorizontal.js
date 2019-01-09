import React, { Component } from 'react'
import axios from 'axios'
import { ICONS } from '../../components/layout/icons'
import Icon from '../layout/icons/Icon'
import Swiper from 'react-id-swiper';

export default class List extends Component {
    state = {
        icons_png:{ICONS},
        icons: [],
        apiUrl:'http://test.technovaa.ir/offernew/user/get/categories'
    }

    componentDidMount(){
        axios.post(`${this.state.apiUrl}`,JSON.stringify({cat_id:"catroot",
        with_ob:"false"}))
        .then(res => {
            // console.log(res.data)
            this.setState({icons: res.data.output.categories}) 
            
        })
        .catch(err => console.log(err))
     }  
     
  render() {
      
      
    //   console.log(icons_icon);
      
    const params = {
        slidesPerView: 8,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false,
        rebuildOnUpdate: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      };
      const categ_list = this.state.icons.map(( item, index) => {
      
         console.log(this.state.icons_png.ICONS);
          
        return (
            
            <div className="container" id="icon_circle" key={index.toString()}>
                <a >
                    
                    <Icon icon={this.state.icons_png.ICONS.ADD_CARD} />
                    <h6 >{item.name}</h6>
                     
                </a>
                
            </div>
            
            
        )
   })
      return(
        <Swiper className="swippper" {...params}>{categ_list}</Swiper>
      )
    
    }
}
