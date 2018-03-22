import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './../firebase/Login'
import Firebase from './../firebase/Firebase'
import './Nav.css';

class Nav extends Component{
  render(){
    return(
      <header>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark warning-color-dark lighten-1">
          <Link className="navbar-brand" to="/">Navbar</Link>
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
                <li className="nav-item">
                  <a className="nav-link waves-effect waves-light" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown 
                  </a>
                  <div className="dropdown-menu dropdown-purple" aria-labelledby="navbarDropdownMenuLink-5">
                    <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                    <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                    <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                  </div>
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