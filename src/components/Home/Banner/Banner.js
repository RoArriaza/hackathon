import React from 'react';
import './Banner.css';
import { Button } from 'mdbreact';

const Banner = () => {
  return (
    <div id="banner">
      <h2>What do you want to do today?</h2>
      <Button color="warning">Warning</Button>
    </div>
  );
};

export default Banner;