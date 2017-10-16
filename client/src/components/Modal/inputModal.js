import React from "react";
import Modal from 'react-modal';
<<<<<<< HEAD
=======
import "./inputModal.css"
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "black"
  }
};

class InputModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#337ab7";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <button onClick={this.openModal} className="btn btn-default" style={{ backgroundColor: "#337ab7", color: "white", borderColor: "#337ab7" }}>
=======
        <button onClick={this.openModal} className="btn btn-default customButton" /*style={{ backgroundColor: "#337ab7", color: "white", borderColor: "#337ab7" }}*/>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
          Add/Update Info
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>

          <form>
            {this.props.children}
          </form>
        </Modal>
      </div>
    );
  }
}

export default InputModal;
