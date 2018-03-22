import React, { Component } from 'react';
import { Input } from 'mdbreact';
import firebase from 'firebase';
import { Button } from 'mdbreact';

const createNewEvent = (userId, eventTitle, eventOwner, eventContact) => {
  const database = firebase.database();
  let ref = database.ref(`users/${userId}/created/`);
  let obj = {
    eventTitle,
    eventOwner,
    eventContact
  };
  ref.push(obj)
    .catch(err => {
      alert(err.message);
    })
};

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      eventTitle: '',
      eventOwner: '',
      eventContact: ''
    };
    this.sendEvent = this.sendEvent.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    })
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  sendEvent(event) {
    event.preventDefault();
    this.state.eventTitle.length !== 0 && this.state.eventOwner.length !== 0 && this.state.eventContact.length !== 0
    ? createNewEvent(this.state.user.uid, this.state.eventTitle, this.state.eventOwner, this.state.eventContact)
    : console.log('no hay ná');
  }
  render() {
    const { eventTitle, eventOwner, eventContact } = this.state;
    return (
      this.state.user !== null ?
      <form>
        <Input type="text" name="eventTitle" value={eventTitle} onChange={this.onChange} label="Event Title"/>
        <Input type="text" name="eventOwner" value={eventOwner} onChange={this.onChange} label="Your Name"/>
        <Input type="email" name="eventContact" value={eventContact} onChange={this.onChange} label="Contact E-Mail" validate error="wrong" success="right" />
        <Button type="submit" onClick={this.sendEvent}>Submit</Button>
      </form>
      :
      <p>Registeeer first!</p>
    );
  }
}

export default CreateEvent;