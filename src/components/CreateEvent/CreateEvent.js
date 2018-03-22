import React, { Component } from 'react';
import { Input } from 'mdbreact';
import firebase from 'firebase';

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      // console.log(this.state.user.email);
    })
  }
  render() {
    return (
      this.state.user !== null ?
      <div id="create-event">
        <h2 className="mb-5">Create a new event</h2>
        <form>
          <Input label="Event Photo URL" icon="image" group type="text" validate error="wrong" success="right"/>
          <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
          <Input label="Contact email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <Input label="City, Country" icon="map-marker" group type="text" validate error="wrong" success="right"/>
          <Input type="textarea" label="Event Description" icon="pencil"/>
          <Input label="Event Tags" icon="tag" group type="email" validate error="wrong" success="right"/>
        </form>
      </div>
      : 
      <div>
        <p>Register first :v</p>
      </div>
    );
  }
}

export default CreateEvent;