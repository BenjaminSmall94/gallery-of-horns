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
    this.props.selectBeast({title: this.props.title, image_URL: this.props.imageURL, description: this.props.description});
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imageURL} alt="{this.props.title}" onClick={this.selectHornedBeast}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <p onClick={this.favorite}>❤️ {this.state.favorites} favorites</p>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;