import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearchBar from './HeaderSearchBar';

export default function Header({ title, searchButton = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const history = useHistory();
  const searchButtonElement = (
    <button
      type="button"
      onClick={ () => setIsVisible(!isVisible) }
    >
      <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
    </button>
  );
  return (
    <>
      <header>
        <button
          type="button"
          onClick={ () => history.push('/perfil') }
        >
          <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
        </button>
        <h1 data-testid="page-title">{ title }</h1>
        { searchButton && searchButtonElement }
      </header>
      { isVisible && <HeaderSearchBar />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
};
