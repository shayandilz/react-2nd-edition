import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';

export default class List extends Component {
    state = {
        apiUrl:'https://api2.off-er.ir/user',
        cat_list:[],
       
    }
    componentDidMount(){
      var new_requestt = JSON.parse(localStorage.getItem('request'))
      new_requestt.colored_icon = "true";
        axios({
          
          url:(`${this.state.apiUrl}${(localStorage.getItem('uri'))} `),
          method: 'post',
          data: JSON.stringify(new_requestt)
          
        }).then(res => {
          const cat_list = res.data.output.categories
          this.setState({ cat_list})
          
        })
         
      }
   
  render() {

      
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

      const categ_list = this.state.cat_list.map(( item, index) => {
         
        return (
            <div id="icon_circle" key={index.toString()}>
                <a href="_blank"> 
                    <img src={item.icon.url}  alt="PRODUCTS"/>
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
