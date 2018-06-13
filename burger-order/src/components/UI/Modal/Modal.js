import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateX(0)' : 'translateY(-20vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default Modal;
