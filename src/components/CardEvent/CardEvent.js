import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './CardEvent.css';
import Rebase from 're-base';
import firebase from 'firebase';

class CardEvent extends Component{
  showData() {
    var base = Rebase.createClass(firebase.database());
    base.fetch('users', {
      context: this,
      asArray: true
    }).then(data => {
      console.log(data);
    })
  }
  componentDidMount() {
    this.showData();
  }
  render = () => {
    let superReturn = [];
    for (let i = 1; i <= 16; i++) {
      let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png';
      superReturn.push(this.showCard(url, i));
    }
    return (superReturn);
}

  showCard(url) {
    return (
      <div className="cardContainer">
        <Card>
          <CardImage className="img-fluid mx-auto" src={url} />
          <CardBody>
            <CardTitle>Evento Random</CardTitle>
            <CardText>
              Descripcion del Evento "holiholiratónconcoli"
            </CardText>
        </CardBody>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capacidad <i className="fa fa-users" aria-hidden="true"></i></li>
          <li className="list-group-item">Horario <i className="fa fa-clock-o" aria-hidden="true"></i></li>
          <li className="list-group-item">Lugar <i className="fa fa-map-marker" aria-hidden="true"></i></li>
        </ul>
      
      <CardBody>
      <Link className="waves-effect waves-light" to="/"><Button color="warning" href="#">Join!</Button></Link><Link className="waves-effect waves-light" to="event-detail"><Button color="warning" href="#">Detail</Button></Link>

      </CardBody>
      </Card>
    </div>
    )
  }
};

export default CardEvent;