import React from 'react'
import Banner from '../sections/Carousel'
import CategoryHorizontal from '../sections/CategoryHorizontal'

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col"></div>
              <div className="col-8" id="B_cat">
              <Banner /> 
              <CategoryHorizontal /> 
              </div>
          <div className="col"></div>
        </div>
      </div>    
    </React.Fragment>
  )
}
export default MainPage

