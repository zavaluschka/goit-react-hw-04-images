import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button/Button';
import { fetchImages } from '../services/Api';
import Notiflix from 'notiflix';

export default class App extends Component {
  state = {
    textValue: '',
    page: 1,
    images: [],
    loading: false,
    totalPages: 0,
  };

  loadImages = async () => {
    const { page, textValue } = this.state;
    try {
      this.setState({ loading: true });

      const data = await fetchImages(textValue, page);
      if (data.hits.length === 0) {
        Notiflix.Notify.failure(
          'Error, there are no images matching these words'
        );

        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      Notiflix.Notify.failure(`Error occurred, please try again`);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.textValue !== prevState.textValue
    ) {
      this.loadImages();
    }
  }
  onSearch = textValue => {
    this.setState(prevState => {
      if (textValue === prevState.textValue) {
        Notiflix.Notify.failure('You have already search by this request');
      }
    });
    this.setState({
      textValue,
      images: [],
      page: 1,
    });
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { loading, images, totalPages, page } = this.state;

    return (
      <div className="mainBlock">
        <Searchbar getSearchData={this.onSearch} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {images.length > 0 && totalPages > page && (
          <Button onClick={this.loadMoreBtn} />
        )}
      </div>
    );
  }
}