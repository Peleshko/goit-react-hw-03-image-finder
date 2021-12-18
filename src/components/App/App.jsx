import React, { Component } from 'react';
import SearchBar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Button from '../Button';
import Loader from '../Loader';
import fetchImages from '../../services/api';
import s from './App.module.css';

class App extends Component {
  state = {
    modalContent: '',
    searchQuery: '',
    page: 1,
    visibleImages: [],
    isLoading: false,
    openModal: false,
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.getData();
    }
    this.handleScroll();
  }

  toggleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  handleChangeQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      visibleImages: [],
    });
  };

  handleNextPage = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  modalContentSet = itemId => {
    const { visibleImages } = this.state;
    const element = visibleImages.find(({ id }) => id === itemId);
    this.setState({ modalContent: element.largeImageURL });
  };

  getData = async () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();

    try {
      const data = await fetchImages(searchQuery, page);
      this.setState(({ visibleImages }) => {
        return { visibleImages: [...visibleImages, ...data.hits] };
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.toggleLoading();
    }
  };

  render() {
    const { visibleImages, openModal, modalContent, isLoading, page } =
      this.state;
    const isNotLastPage = visibleImages.length / page === 12;
    const btnEnable = visibleImages.length > 0 && !isLoading && isNotLastPage;
    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.handleChangeQuery} />
        <>
          <ImageGallery
            images={visibleImages}
            onClick={this.toggleModal}
            onItemClick={this.modalContentSet}
          />

          {openModal && (
            <Modal content={modalContent} onBackdrop={this.toggleModal} />
          )}
          {isLoading && <Loader />}

          {btnEnable && (
            <Button name="Load more" onPress={this.handleNextPage} />
          )}
        </>
      </div>
    );
  }
}

export default App;
