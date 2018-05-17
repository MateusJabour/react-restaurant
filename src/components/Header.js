import React from 'react'
import PropTypes from 'prop-types';

const Header = ({ tagline }) => (
  <header className="header">
    <h1 className="header__title">
      Welcome to <span>{tagline}</span>
    </h1>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;
