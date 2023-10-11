import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import gall from './ImageGallery.module.css';
export const ImageGallery = ({ images }) => {
  return (
    <ul className={gall.gallery}>
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          src={img.webformatURL}
          alt={img.tags}
          modalImg={img.largeImageURL}
        />
      ))}
    </ul>
  );
};