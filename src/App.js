import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/firebase/Login'
import Nav from './components/Nav/Nav.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
