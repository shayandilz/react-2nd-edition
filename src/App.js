import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
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
         
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route  path="/searchresult" component={Tracks}/>
              <Route  path="/products/item/:id" component={Products}/>
          </Switch>
       
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
