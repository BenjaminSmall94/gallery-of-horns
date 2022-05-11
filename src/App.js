import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beastData from './data.json';
import Modal from 'react-bootstrap/Modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isModalDisplaying: false,
      beastName: '',
      beastURL: '',
      beastDescription: ''
    }
  }

  selectBeast = (beast) => {
    this.setState({
      isModalDisplaying: true,
      beastName: beast.title,
      beastURL: beast.image_URL,
      beastDescription: beast.description
    });
  };

  unselectBeast = () => {
    this.setState({
      isModalDisplaying: false
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main beastData={beastData} selectBeast={this.selectBeast}/>
        <Footer />
        <Modal
          show={this.state.isModalDisplaying}
          onHide={this.unselectBeast}
        >
          <Modal.Title>{this.state.beastName}</Modal.Title>
          <img src={this.state.beastURL} alt={this.state.beastName}></img>
          <p>{this.state.beastDescription}</p>          
        </Modal>
      </>
    );
  }
}

export default App;
