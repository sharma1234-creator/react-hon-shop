import React from "react";
// import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Dialog extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
       
        <button className="explain" onClick={this.onOpenModal}>Details</button>
        <div className="dialog-box">
        <Modal open={open} onClose={this.onCloseModal} >
          <h2>Details of Goods</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </Modal>
        </div>
      </div>
    );
  }
}

export default Dialog;

