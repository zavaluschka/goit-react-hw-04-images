import loadMore from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={loadMore.button} onClick={onClick}>
      Load More
    </button>
  );
};
