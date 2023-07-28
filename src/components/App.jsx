import React, { Component } from 'react';

import { getImages } from './Api/Api.js';

import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ErrorMessege } from './Error/ErrorMessege';
import { Loader } from './Loader/Loader';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { notifyOptions } from './Notify/Notify.js';
import { GlobalStyle } from './GlobalStyle';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    status: Status.IDLE,
    isEmpty: false,
    error: false,
    isCollectionEnding: false,
  };

  componentDidUpdate(_, { page: prevPage, query: prevQuery }) {
    const { query, page } = this.state;

    if (query !== prevQuery || page !== prevPage) {
      this.setState({ status: Status.PENDING });
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;

    try {
      const { data } = await getImages(query, page);

      if (data.hits.length === 0) {
        this.setState({ isEmpty: true, status: Status.IDLE });
        return;
      }

      if (Math.ceil(data.totalHits / 12) === page) {
        this.setState({
          isCollectionEnding: true,
          status: Status.RESOLVED,
          value: '',
        });
      }

      this.setState(({ images: prevImages }) => ({
        images: [...prevImages, ...data.hits],
        status: Status.RESOLVED,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, status: Status.REJECTED });
    }
  };

  handleSearchSubmit = value => {
    if (value === '') {
      toast.info('Please enter key words for search', notifyOptions);
      return;
    }
    this.setState({
      images: [],
      query: value,
      isEmpty: false,
      page: 1,
      isCollectionEnding: false,
    });
  };
  handleLoadMore = () => {
    this.setState(({ page: prevPage }) => ({ page: prevPage + 1 }));
  };

  render() {
    const { images, isEmpty, status, error, isCollectionEnding } = this.state;
    return (
      <>
        <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        {isEmpty && (
          <ErrorMessege message="O No images were found for this request..."></ErrorMessege>
        )}
        {status === 'rejected' && <ErrorMessege>{error}</ErrorMessege>}
        <Layout>
          <ImageGallery images={images} />
        </Layout>

        {status === 'pending' && <Loader />}
        {status === 'resolved' && !isEmpty && !isCollectionEnding && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        <ToastContainer transition={Slide} draggablePercent={60} />
        <GlobalStyle />
      </>
    );
  }
}
