import React, { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button/Button';
import { fetchImages } from '../services/Api';
import Notiflix from 'notiflix';

export const App = () => {
  const [textValue, setTextValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

 

  useEffect(() => {
    if (!textValue) {
      return;
    }
    async function loadImages() {
      try {
        setLoading(true);

        const data = await fetchImages(textValue, page);
        setImages(prevImg => [...prevImg, ...data.hits]);
        if (data.hits.length === 0) {
          Notiflix.Notify.failure(
            'Error, there are no images matching these words'
          );

          return;
        }

        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch (error) {
        Notiflix.Notify.failure(`Error occurred, please try again`);
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, [textValue, page]);

  const onSearch = textValue => {
    setTextValue(textValue);

    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const loadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="mainBlock">
      <Searchbar getSearchData={onSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {images.length > 0 && totalPages > page && (
        <Button onClick={loadMoreBtn} />
      )}
    </div>
  );
};
export default App