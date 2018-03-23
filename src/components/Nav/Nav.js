import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './../firebase/Login';
import Firebase from './../firebase/Firebase';
import Logo from './../../images/logo.png';
import Navbar from 'mdbreact';
import './Nav.css';

class Nav extends Component{
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-light blue-grey lighten-5">
          <Link className="navbar-brand" to="/"><img id="main-logo" src={Logo} alt="Website Logo"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-5">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link waves-effect waves-light" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link waves-effect waves-light" to="create-event">Create an Event</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item">
                  <Login/>
                </li>
              </ul>
            </div>
          </nav>
      </header>
    )
  }
}

export default Nav;