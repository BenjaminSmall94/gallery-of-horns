import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsWanted: 'all'
    }
  }

  handleSelect = (e) => {
    let hornsWanted = e.target.value;
    if(hornsWanted !== 'all') {
      hornsWanted = parseInt(hornsWanted);
    }
    this.setState({hornsWanted: hornsWanted});
  }

  render() {
    let beastArray = this.props.beastData.map(beast => {
      if(this.state.hornsWanted === 'all' || beast.horns === this.state.hornsWanted) {
        return (
          <HornedBeast
            beast={beast}
            key={beast._id}
            selectBeast={this.props.selectBeast}
          />
        )
      } else {
        return <></>;
      }
    });

    return (
      <main>
        <Form.Label htmlFor="horn-selector">Horn Selector</Form.Label>
        <Form.Select name="Horn Selector" onChange={this.handleSelect} id="horn-selector">
          <option value="all" selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">One Hundred</option>
        </Form.Select>
        {beastArray}
      </main>
    );
  }
}

export default Main;