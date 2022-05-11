import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beastArray = this.props.beastData.map(beast => {
      return (
        <HornedBeast
          title={beast.title}
          imageURL={beast.image_url}
          description={beast.description}
          key={beast._id}
          selectBeast={this.props.selectBeast}
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