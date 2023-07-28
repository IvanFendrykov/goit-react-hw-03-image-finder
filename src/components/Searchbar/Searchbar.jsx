import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearchHeart } from 'react-icons/bs';


import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchName: value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };
  render() {
    const { searchName } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <BsSearchHeart size="24" />
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
