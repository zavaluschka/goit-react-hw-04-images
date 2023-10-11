import { Component } from 'react';
import search from './Searchbar.module.css';
import Notiflix from 'notiflix';
export class Searchbar extends Component {
  state = {
    value: '',
  };
  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.value === '') {
      return Notiflix.Notify.failure(`Can't be empty`);
    }
    this.props.getSearchData(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className={search.searchbar}>
        <form className={search.searchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={search.searchFormButton}>
            <span className={search.buttonLabel}>Search</span>
          </button>

          <input
            className={search.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}