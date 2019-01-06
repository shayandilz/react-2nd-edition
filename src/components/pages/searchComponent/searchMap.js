import React, { Component } from 'react'
import { Consumer } from '../../../context'
import Spinner from '../../layout/Spinner'
import SearchResult from './SearchResult'
 class Tracks extends Component {
  render() {
    return (
      <Consumer>
          {value => {
              const { items } = value
              console.log(items);
              if(items === undefined || items.length === 0){
                return <Spinner />
              }else{
                return(
                    <React.Fragment>
                        
                        <div className="row">
                                {items.map(item => (
                                    <SearchResult key={item.id} id={item.id} title={item.name} price={item.current_price} thumb={item.thumb_url}/>
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