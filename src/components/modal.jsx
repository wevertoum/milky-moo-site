import React from 'react'
import './modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ visible }) => {
  if (visible) {
    return (
      <div className="modal-main">
        <div className="modal-content">
          <p>Some text in the Modal..</p>
        </div>
      </div>
    )
  } return <></>
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};
export default Modal
