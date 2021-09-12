import React from "react";
// import { render } from "react-dom";
import "./style.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  borderRadius:"1rem"
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
      <div style={styles} >
       
        <a className="add-list" onClick={this.onOpenModal}>ADD TO WISHLIST</a>
        <Modal  open={open} onClose={this.onCloseModal} className="dialog-modal">
            
          <h2>About wishlist</h2>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p>ADDED TO WISHLIST</p>
        </Modal>
      </div>
    );
  }
}

export default Dialog;

