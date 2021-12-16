import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchBar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import fetchImages from '../API/api';
import './App.css';

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

  getData = () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        this.setState(({ visibleImages }) => {
          return { visibleImages: [...visibleImages, ...hits] };
        });
      })
      .catch(error => console.log(error.message))
      .finally(this.toggleLoading);
  };

  render() {
    const { visibleImages, openModal, modalContent, isLoading, page } =
      this.state;
    const isNotLastPage = visibleImages.length / page === 12;
    const btnEnable = visibleImages.length > 0 && !isLoading && isNotLastPage;
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleChangeQuery} />
        {visibleImages.length === 0 ? (
          <h2>Enter your request</h2>
        ) : (
          <>
            <ImageGallery
              images={visibleImages}
              onClick={this.toggleModal}
              onItemClick={this.modalContentSet}
            />
            <ToastContainer autoClose={3000} />

            {openModal && (
              <Modal content={modalContent} onBackdrop={this.toggleModal} />
            )}
            {isLoading && <Loader />}

            {btnEnable && (
              <Button name="Load more" onPress={this.handleNextPage} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
