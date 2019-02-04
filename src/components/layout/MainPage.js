import React from 'react'
import Navbar from '../layout/Navbar'
import TopBanner from '../dashboard/0_topbanner'
// import Category from '../dashboard/2_categories'
import CategoryHorizontal from '../dashboard/1_categories'
import Editors from '../dashboard/2_EditorsChoice'
import ActionItem1 from '../dashboard/3_action_items'
import Banner1 from '../dashboard/4_banner'
import Banner2 from '../dashboard/5_banner'
import Banner3 from '../dashboard/6_banner'
import Banner4 from '../dashboard/8_banner(1)'
import Banner5 from '../dashboard/9_banner(2)'
import Banner6 from '../dashboard/10_banner(1)'
import Banner7 from '../dashboard/12_banner(1)'
import Banner8 from '../dashboard/13_banner(2)'
import Banner9 from '../dashboard/14_banner(1)'
import Footer from '../sections/Footer'
const MainPage = () => {
 
  return (
    <React.Fragment>
      <Navbar/>
       <div id="category">
            <div className="container-fluid" >
                <div className="row justify-content-end">
                  <div className="col-3">
                      {/* <Category /> */}
                      <a href="_blank" className="icon_name">Category</a>
                  </div>
                </div>  
            </div>
          </div>
      <div className="container">
        <div className="row justify-content-sm-center">
         <div className="col-10" id="B_cat">
         
              <TopBanner /> 
              <CategoryHorizontal /> 
              <Editors />
              <ActionItem1 />
              <Banner1 />
              <Banner2 />
              <Banner3 />
              <Banner4 />
              <Banner5 />
              <Banner6 />
              <Banner7 />
              <Banner8 />
              <Banner9 />
              <Footer /> 
              </div>
         </div>
      </div>    
    </React.Fragment>
  )
}
export default MainPage

