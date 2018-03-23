import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './CardEvent.css';
import Rebase from 're-base';
import firebase from 'firebase';
import Loader from './../../images/grid.svg';


class CardEvent extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
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
      this.setState({
        data: addToState
      });
    })
  }
  componentDidMount() {
    this.showData();
  }
  render() {
    return (
    <div id="cardEvent">
      <h3>Upcoming Events</h3>
      <hr />
      {
        this.state.data !== null ?
        this.state.data.map(item => {
          return item.map(subItem => {
            return (
              <div className="cardContainer" key={subItem.eventTitle}>
                <Card>
                  <CardImage className="img-fluid mx-auto" src={subItem.eventPhoto} />
                  <CardBody>
                    <CardTitle>
                      {subItem.eventTitle}
                    </CardTitle>
                    <CardText>
                      {subItem.eventDescription.substring(0, 100) + '...'}
                    </CardText>
                  </CardBody>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Spots {subItem.eventSpots} <i className="fa fa-users" aria-hidden="true"></i></li>
                    <li className="list-group-item">Time {subItem.eventTime} <i className="fa fa-clock-o" aria-hidden="true"></i></li>
                    <li className="list-group-item">Place {subItem.eventLocation} <i className="fa fa-map-marker" aria-hidden="true"></i></li>
                  </ul>
                  <CardBody>
                    <Button color="warning"><Link className="waves-effect waves-light" to="/">Join!</Link></Button>
                    <Button color="warning"><Link className="waves-effect waves-light" to={`event-detail/${subItem.eventTitle.replace(/ /g, '-')}`} data-title={subItem.eventTitle}>Detail</Link></Button>
                  </CardBody>
                </Card>
              </div>
            )
          })
        })
        : <img src={Loader} alt="Loading"/>
      }
    </div>
    );
  }
}

export default CardEvent;