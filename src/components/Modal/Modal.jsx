import { useEffect } from 'react';
import modal from './Modal.module.css';
export const Modal = ({ img, alt, onToggle }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggle]);

  const handleClick = e => {
    if (e.target !== e.currentTarget) {
      onToggle();
      return;
    }
  };

  return (
    <div className={modal.overlay} onClick={handleClick}>
      <div className={modal.modalImage}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};