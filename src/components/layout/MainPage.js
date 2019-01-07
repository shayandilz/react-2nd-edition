import React from 'react'
import Banner from '../sections/Carousel'
import CategoryHorizontal from '../sections/CategoryHorizontal'

const MainPage = () => {
  return (
    <React.Fragment>
       <div className="container-fluid">
           <div className="col-md-12">
            <Banner /> 
            <CategoryHorizontal />
           </div>
           
        </div>
        
    </React.Fragment>
  )
}
export default MainPage