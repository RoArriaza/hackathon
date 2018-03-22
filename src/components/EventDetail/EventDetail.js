import React, { Component } from 'react';
import { Input } from 'mdbreact';
import firebase from 'firebase';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import addEvent from './../firebase/AddEvent';
import './EventDetail.css';

class EventDetail extends Component {
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
      /*this.state.user !== null ?*/
      <div id="eventDetail mx-auto">
        <Card className='detailCard'>
          <CardImage className="img-fluid mx-auto" src="https://definicion.mx/wp-content/uploads/2014/07/Evento.jpg" />
          <CardBody>
            <CardTitle>Evento Random</CardTitle>
            
        </CardBody>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-around">
          <span>Fecha <i className="fa fa-calendar" aria-hidden="true"></i>:</span>
          <span>Horario <i className="fa fa-clock-o" aria-hidden="true"></i>:</span>
          </li>
          <li className="list-group-item d-flex justify-content-around">
          <span>Capacidad <i className="fa fa-users" aria-hidden="true"></i> :</span>
          <span>Lugar <i className="fa fa-map-marker" aria-hidden="true"></i>:</span>
          </li>
        </ul>
          <CardText>
              Descripcion del Evento "holiholiratónconcoli"
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </CardText>
          <ul className="list-group list-group-flush">
          <li className="list-group-item text-muted">Creado por:</li>
          <li className="list-group-item"><Button color="warning" href="#">Share</Button><Button color="warning" href="#">Anótame</Button></li>

        </ul>
        </Card>
      </div>
      /*
      :
      <div>
        <p>Register first :v</p>
      </div>*/
    );
  }
}

export default EventDetail;