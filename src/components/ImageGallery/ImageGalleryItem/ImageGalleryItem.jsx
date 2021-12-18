import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  modalContent = id => {
    this.props.onItemClick(id);
    console.log(id);
  };
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    return (
      <img
        src={webformatURL}
        alt={tags}
        data-src={largeImageURL}
        className={s.ImageGalleryItemImage}
        onClick={() => this.modalContent(id)}
      />
    );
  }
}

ImageGalleryItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
