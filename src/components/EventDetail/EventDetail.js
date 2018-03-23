import React, { Component } from 'react';
import { Input } from 'mdbreact';
import firebase from 'firebase';
import Rebase from 're-base';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import addEvent from './../firebase/AddEvent';
import './EventDetail.css';

class EventDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  showData() {
    var base = Rebase.createClass(firebase.database());
    base.fetch('users', {
      context: this,
      asArray: true
    }).then(data => {
      let results = [];
      let addToState = [];
      data.map((item) => {
        results.push(item.created);
      })
      results.map((item) => {
        const vals = Object.keys(item).map(key => item[key]);
        addToState.push(vals);
      })
      console.log(addToState);
      addToState.map(item => {
        item.map(subItem => {
          let str = this.props.location.pathname;
          let preChar = str.replace('/event-detail/', '');
          if (subItem.eventTitle.replace(/ /g, '-') === preChar) {
            this.setState({
              data: subItem
            })
          }
        })
      })
    })
    .then(() => {
      console.log(this.state);
    })
  }
  componentDidMount() {
    this.showData();
  }
  render() {
    return (
      <div id="eventDetail mx-auto">
        {
        this.state.data !== null ?
          <Card className='detailCard'>
            <CardImage className="img-fluid mx-auto" src={this.state.data.eventPhoto} />
            <CardBody>
              <CardTitle>{this.state.data.eventTitle}</CardTitle>
              
          </CardBody>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-around">
              <span>Date <i className="fa fa-calendar" aria-hidden="true"></i>: {this.state.data.eventDate}</span>
              <span>Time <i className="fa fa-clock-o" aria-hidden="true"></i>: {this.state.data.eventTime}</span>
            </li>
            <li className="list-group-item d-flex justify-content-around">
              <span>Spots <i className="fa fa-users" aria-hidden="true"></i>: {this.state.data.eventSpots}</span>
              <span>Place <i className="fa fa-map-marker" aria-hidden="true"></i>: {this.state.data.eventLocation}</span>
            </li>
          </ul>
            <CardText>
              {this.state.data.eventDescription}
            </CardText>
            <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">Created by: {this.state.data.eventOwner}</li>
            <li className="list-group-item d-flex justify-content-between"><Button color="warning" target="_blank" href="https://twitter.com/home?status=He%20confirmado%20asistencia%20en%20%23JoinUs%20%23JoinMe%20%23Event%20%23Joy">Share<i className="fa fa-twitter"></i></Button><Button color="warning" href="#">Anótame</Button></li>

          </ul>
          </Card>
          : <p>loading...</p>
          }
      </div>
    );
  }
}

export default EventDetail;