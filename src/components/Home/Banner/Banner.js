import React from 'react';
import './Banner.css';
import { Button } from 'mdbreact';

const Banner = () => {
  return (
    <div id="banner">
      <h2>Come Join Us!</h2>
      <Button color="warning">Register</Button>
    </div>
  );
};

export default Banner;