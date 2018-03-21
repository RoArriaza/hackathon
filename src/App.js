import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateEvent from './components/CreateEvent/CreateEvent';

import Nav from './components/Nav/Nav.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/create-event' component={CreateEvent}/>
        </Switch>
      </div>
    );
  }
}

export default App;
