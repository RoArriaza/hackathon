import React, { Component } from 'react';
import { Input } from 'mdbreact';
import firebase from 'firebase';
import { Button } from 'mdbreact';
// import addEvent from './../firebase/AddEvent';

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventTitle: '',
      eventOwner: '',
      eventContact: ''
    };
    this.sendEvent = this.sendEvent.bind(this);
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state)
  }
  sendEvent(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    const { eventTitle, eventOwner, eventContact } = this.state;
    return (
      <form>
        <Input type="text" name="eventTitle" value={eventTitle} onChange={this.onChange} label="Event Title"/>
        <Input type="text" name="eventOwner" value={eventOwner} onChange={this.onChange} label="Your Name"/>
        <Input type="email" name="eventContact" value={eventContact} onChange={this.onChange} label="Contact E-Mail" validate error="wrong" success="right" />
        <Button type="submit" onClick={this.sendEvent}>Submit</Button>
      </form>
    );
  }
}

export default CreateEvent;