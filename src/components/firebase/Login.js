import React, { Component } from 'react';
import firebase from 'firebase';

class navbar extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message} `));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    //Si el usuario está logeado
    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="img-fluid rounded-circle z-depth-0" />
          <button outline color="secondary" className="App-btn warning" onClick={this.handleLogout}>Logout</button>
        </div>

      );
      //si el usuario no está logeado
    } else {
      return (
        <button className="App-btn warning" onClick={this.handleAuth}> Login con Google </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderLoginButton()}
      </div>

    );
  }
}

export default navbar;