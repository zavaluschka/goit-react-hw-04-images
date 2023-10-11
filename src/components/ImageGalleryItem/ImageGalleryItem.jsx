import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import gallItem from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = { isOpenModal: false };

  toggleModal = () => {
    this.setState(({ isOpenModal }) => ({ isOpenModal: !isOpenModal }));
  };

  render() {
    const { modalImg, src, alt } = this.props;
    const { isOpenModal } = this.state;

    return (
      <li
        className={gallItem.galleryItem}
        onClick={() => {
          this.toggleModal();
        }}
      >
        <img
          className={gallItem.itemImage}
          src={src}
          alt={alt}
          loading="lazy"
        />
        {isOpenModal && (
          <Modal img={modalImg} alt={alt} onToggle={this.toggleModal} />
        )}
      </li>
    );
  }
}