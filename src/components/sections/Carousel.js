import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel, onChange, onClickItem} from 'react-responsive-carousel'
import axios from 'axios'


class Banner extends Component{
  state = {
    banner: [],
    apiUrl:'https://api2.off-er.ir/user/get/carousel' 
};
  componentDidMount(){
    axios.post(`${this.state.apiUrl}`,JSON.stringify({carousel_id:"32",
    refresh:"true"},{carousel_id:"40",
    refresh:"true"}))
    .then(res => {
        // console.log(res.data)
        this.setState({banner0: res.data.output[0].url}) 
        this.setState({banner1: res.data.output[1].url})
        this.setState({banner2: res.data.output[2].url})  
    })
    .catch(err => console.log(err))
  }  
  
  render() {
    // console.log(this.state);
    const banner = this.state
 
    
    return(
      <Carousel  showThumbs={false} showArrows={false} status={false} onChange={onChange} onClickItem={onClickItem} infiniteLoop={true} autoPlay={true} showStatus={false}>
          <div>
            <img src={banner.banner0} style={{backgroundSize:"200px"}} alt=""/>
          </div>
          <div>
            <img src={banner.banner1} alt=""/>
          </div>
           <div>
            <img src={banner.banner2} alt=""/>
          </div>
      </Carousel>
    )
  }
}
export default Banner