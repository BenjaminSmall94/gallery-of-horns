import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import beastData from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isModalDisplaying: false,
      beast: ''
    }
  }

  selectBeast = (beast) => {
    this.setState({
      isModalDisplaying: true,
      beast: beast
    });
  };

  unselectBeast = () => {
    this.setState({
      isModalDisplaying: false,
      beast: ''
    });
  }

  render() {
    let selectedBeast = '';
    if(this.state.beast !== '') {
      selectedBeast = (
        <SelectedBeast 
          beast={this.state.beast} 
          showing={this.state.isModalDisplaying}
          close={this.unselectBeast} 
        />
      );
    }
    return (
      <>
        <Header />
        <Main beastData={beastData} selectBeast={this.selectBeast}/>
        <Footer />
        {selectedBeast}
      </>
    );
  }
}

export default App;
