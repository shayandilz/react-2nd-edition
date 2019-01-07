import React, { Component } from 'react'
import axios from 'axios'
import { ICONS } from '../../components/layout/icons'
import Icon from '../layout/icons/Icon'
import Swiper from 'react-id-swiper';

export default class List extends Component {
    state = {
        icon: [],
        apiUrl:'http://test.technovaa.ir/offernew/user/get/categories'
    }

    componentDidMount(){
        axios.post(`${this.state.apiUrl}`,JSON.stringify({cat_id:"catroot",
        with_ob:"false"}))
        .then(res => {
            // console.log(res.data)
            this.setState({icon: res.data.output.categories[0]}) 
            
        })
        .catch(err => console.log(err))
     }  

  render() {
      const cat_icon = this.state
      console.log(cat_icon);
      
    const params = {
        slidesPerView: 5,
        spaceBetween: 50,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: false,
        rebuildOnUpdate: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      };
   
      return(
        <Swiper {...params}>
          <div>
              
              <a href={cat_icon.icon.object_types}><Icon className="carddd" icon={ICONS.ADD_CARD}/>
              <h6>{cat_icon.icon.name}</h6></a>
              </div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          <div><a href="#"><Icon className="carddd" icon={ICONS.ADD_CARD}/></a></div>
          
        </Swiper>
      )
    
    }
}
