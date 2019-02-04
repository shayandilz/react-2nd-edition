import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel, onChange, onClickItem} from 'react-responsive-carousel'
import axios from 'axios'
import * as  axiosDashboardContext from '../../context'

class TopBanner extends Component{
  constructor(props){
      super(props);
      this.state = {
        apiUrl:'https://api2.off-er.ir/user/get/carousel', 
        topbanner_id: [],
        topbanner_item:[],  
    };
  }
  
componentDidMount(){
  axiosDashboardContext.axiosDashboard().then((res)=>{
   
    this.setState({topbanner_id: res.output.sections[0]})
    const { id } = this.state.topbanner_id
   
    axios({
      
      url:(`${this.state.apiUrl}`),
      method: 'post',
      data: JSON.stringify({refresh:"true",carousel_id:id})
    }).then(res => {
      this.setState({topbanner_item: res.data.output})
      
    }) 
 }) 
}

  render() {
    const banner_top = this.state.topbanner_item.map((item, index) => {
      return(
        <div key={index.toString()} >
          <img style={{backgroundSize:"200px"}} alt="" src={item.url} />
        </div>
      )
    })
    
    return(
      
      <Carousel  showThumbs={false} showArrows={false} status={false} onChange={onChange} onClickItem={onClickItem} infiniteLoop={true} autoPlay={true} showStatus={false}>
          {banner_top}
      </Carousel>
    )
  }
}
export default TopBanner