import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title="Horned Beastie #1" description="The Minotaur of the North" imgURL="./img/minotaur.jpeg"/>
        <HornedBeast title="Horned Beastie #2" description="The Minotaur of the South" imgURL='./img/minotaur.jpeg'/>
      </>
    );
  }
}

export default Main;