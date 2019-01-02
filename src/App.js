import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import MainPage from './components/layout/MainPage'
import { Provider } from './context'
import {Products} from './components/tracks/Products'
import Category from './components/tracks/Category'
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
              <Route exact path="/products/item/:id" component={Products}/>
          </Switch>
        </div>   
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
