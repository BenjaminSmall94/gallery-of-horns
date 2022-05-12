import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }

  favorite = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }

  selectHornedBeast = () => {
    this.props.selectBeast(this.props.beast);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.title} onClick={this.selectHornedBeast}/>
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>{this.props.beast.description}</Card.Text>
          <p onClick={this.favorite}>❤️ {this.state.favorites} favorites</p>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;