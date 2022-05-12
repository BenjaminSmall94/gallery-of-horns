import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showing}
        onHide={this.props.close}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>{this.props.beast.title}</Modal.Title>
        <img src={this.props.beast.image_url} alt={this.props.beast.title}></img>
        <p>{this.props.beast.description}</p>
        <p>Number of Horns: {this.props.beast.horns}</p>
      </Modal>
    );
  }
}

export default SelectedBeast;