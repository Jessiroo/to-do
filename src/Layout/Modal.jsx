import { Fragment } from "react";
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

// Backdrop
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose} />
  );
}; 

// Modal Overlay
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
};

// Portal
const portal = document.getElementById('overlays');

// Modal Component for Export 
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />, portal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portal
      )}
    </Fragment>
  );
};

export default Modal;