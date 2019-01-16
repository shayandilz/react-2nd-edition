import React from 'react'
import Navbar from '../layout/Navbar'
import Category from '../sections/Category'
import Banner from '../sections/Carousel'
import CategoryHorizontal from '../sections/CategoryHorizontal'
import Editors from '../sections/Editors'
import Banner1 from '../sections/Banner1'
import Banner2 from '../sections/Banner2'
import Banner3 from '../sections/Banner3'
import Footer from '../sections/Footer'
const MainPage = () => {
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
      <div className="container">
        <div className="row justify-content-sm-center">
         <div className="col-10" id="B_cat">
         
              <Banner /> 
              <CategoryHorizontal /> 
              <Editors />
              <Banner1 />
              <Banner2 />
              <Banner3 />
              <Footer />
              </div>
         </div>
      </div>    
    </React.Fragment>
  )
}
export default MainPage

