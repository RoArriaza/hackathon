import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateEvent from './components/CreateEvent/CreateEvent';
import EventDetail from './components/EventDetail/EventDetail';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/create-event' component={CreateEvent}/>
          <Route exact path='/event-detail' component={EventDetail}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
