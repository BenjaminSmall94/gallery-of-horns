import React from 'react';
import HornedBeast from './HornedBeast.js';
import beastData from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beastArray = beastData.map(beast => {
      return (
        <HornedBeast
          title={beast.title}
          imgURL={beast.image_url}
          description={beast.description}
          key={beast._id}
        />)
    });

    return (
      <main>
        {beastArray}
      </main>
    );
  }
}

export default Main;