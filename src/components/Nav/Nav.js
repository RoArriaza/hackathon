import React, { Component } from 'react';

class Nav extends Component{
  render(){
    return(
      <header>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark cyan">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link waves-effect waves-light" href="#">
                <i className="fa fa-envelope"></i> Contact <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light" href="#"><i className="fa fa-gear"></i> Settings</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i> Profile </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                    <a className="dropdown-item waves-effect waves-light" href="#">My account</a>
                    <a className="dropdown-item waves-effect waves-light" href="#">Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav;