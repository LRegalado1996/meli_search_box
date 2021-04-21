import React from 'react';
import './Header.scss';
import { SearchBox } from './../';
import logo from '../../assets/images/logo.svg';

const Header = ({
  selectedSearch
}) => {
  return (
    <header className="Header">
      <img className="logo_mercadolibre" src={ logo } alt="Mercado Libre logo" />
      <SearchBox 
        selected={selectedSearch}
      />
  </header>
  );
}
export { Header };