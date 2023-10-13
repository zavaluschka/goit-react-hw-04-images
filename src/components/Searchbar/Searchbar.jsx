import { useState } from 'react';
import search from './Searchbar.module.css';
import Notiflix from 'notiflix';
export const Searchbar = ({ getSearchData }) => {
  const [value, setValue] = useState('');

  // state = {
  //   value: '',
  // };
  const onChange = e => {
    setValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return Notiflix.Notify.failure(`Can't be empty`);
    }

    getSearchData(value);
  };

  return (
    <header className={search.searchbar}>
      <form className={search.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={search.searchFormButton}>
          <span className={search.buttonLabel}>Search</span>
        </button>

        <input
          className={search.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={onChange}
        />
      </form>
    </header>
  );
};