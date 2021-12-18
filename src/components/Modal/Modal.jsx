import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onBackdrop();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onBackdrop();
    }
  };

  render() {
    const { content, tags } = this.props;
    console.log(content);
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={content} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onBackdrop: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default Modal;
