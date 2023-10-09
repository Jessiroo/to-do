import { Fragment, useContext } from "react";
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import ColorContext from "../context/color-context";

// Backdrop
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose} />
  );
}; 

// Modal Overlay
const ModalOverlay = (props) => {
  const { colors } = useContext(ColorContext);

  // Dynamic Styling
  const modalColors = { backgroundColor: colors.cardModal, color: colors.fontGeneral };

  return (
    <div className={classes.modal} style={modalColors}>
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