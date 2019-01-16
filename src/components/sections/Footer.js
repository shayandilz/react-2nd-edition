import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        
            <div id="footer" className="row">
                <div className="col-md-4 py-3 px-lg-5">

                </div>
                <div className="col-md-4 py-3 px-lg-5">
                    <ul>
                        <li>
                             <a>Contact Us</a>
                        </li>
                        <li>
                             <a>About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 py-3 px-lg-5">
                    <ul>
                        <li>
                            <a>Q&A</a>  
                        </li>
                        <li>
                            <a>Terms of use</a>
                        </li>
                        <li>
                             <a>Retail Stores</a>  
                        </li>
                    </ul>
                </div>
            </div>
       
      
    )
  }
}
