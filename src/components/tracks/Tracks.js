import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Track from '../tracks/Track'
 class Tracks extends Component {
  render() {
    return (
      <Consumer>
          {value => {
              const { items, heading } = value
            //   console.log(value);
              if(items === undefined || items.length === 0){
                return <Spinner />
              }else{
                return(
                    <React.Fragment>
                        <h3 className="text-center mb-4">{heading}</h3>
                        <div className="row">
                                {items.map(item => (
                                    <Track key={item.id} id={item.id} title={item.name} price={item.current_price} thumb={item.thumb_url}/>
                                ))}
                        </div>
                    </React.Fragment>
                    
                )
              }
          }}
      </Consumer>
    )
  }
}
export default Tracks