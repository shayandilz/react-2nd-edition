import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import MainPage from './components/layout/MainPage'
import { Provider } from './context'
import {Products} from './components/sections/Products'
import Category from './components/sections/Category'
import Tracks from './components/pages/searchComponent/searchMap';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div id="category">
              <div className="container-fluid row" >
              <div className="col-md-1 offset-md-10">
              <Category />
              </div>
          </div>
          </div>
          
        <div className="container">
        
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route  path="/searchresult" component={Tracks}/>
              <Route  path="/products/item/:id" component={Products}/>
          </Switch>
        </div>   
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
