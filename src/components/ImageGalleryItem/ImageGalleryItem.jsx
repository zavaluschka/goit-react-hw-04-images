import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import gallItem from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ modalImg, src, alt }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // state = { isOpenModal: false };

  const toggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  return (
    <li
      className={gallItem.galleryItem}
      onClick={() => {
        toggleModal();
      }}
    >
      <img className={gallItem.itemImage} src={src} alt={alt} loading="lazy" />
      {isOpenModal && <Modal img={modalImg} alt={alt} onToggle={toggleModal} />}
    </li>
  );
};