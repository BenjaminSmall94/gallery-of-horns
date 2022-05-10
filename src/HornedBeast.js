import React from 'react';
import pic from './img/minotaur.jpeg';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={pic} alt={this.props.title}/>
      <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;