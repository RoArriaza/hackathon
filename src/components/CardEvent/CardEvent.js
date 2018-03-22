import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './CardEvent.css';

class CardEvent extends Component{  
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
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href="#">Button</Button>
        </CardBody>
      </Card>
    </div>
    )
  }
};

export default CardEvent;