import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop,ModalDescr, ModalContent, ModalPicture } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClose);
    window.addEventListener('click', this.props.onClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onClose);
  }

  render() {
    const { image, alt } = this.props;
    return createPortal(
      <ModalBackdrop >
        <ModalContent>
          <ModalPicture src={`${image}`} alt={`${alt}`} />
          <ModalDescr>{alt}</ModalDescr>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
};
