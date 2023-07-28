import { ListItem, Picture } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export  class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = ({ code, target: { nodeName } }) => {
    if (code === 'Escape' || nodeName === 'DIV') {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen } = this.state;
    const { largeImageURL, webformatURL, tags } = this.props.image;

    return (
      <ListItem>
        <span onClick={this.openModal}>
          <Picture src={`${webformatURL}`} alt={`${tags}`} />
        </span>
        {isModalOpen && (
          <Modal image={largeImageURL} alt={tags} onClose={this.closeModal} />
        )}
      </ListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }),
};