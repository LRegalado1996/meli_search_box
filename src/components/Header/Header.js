import React from 'react';
import './Header.scss';
import { SearchBox } from './../';
import logo from '../../assets/images/logo.svg';

const Header = ({
  selectedSearch,
  onClickEventSearch
}) => {
  return (
    <header className="Header">
      <img className="logo_mercadolibre" src={ logo } alt="Mercado Libre logo" />
      <SearchBox 
        selected={selectedSearch} 
        onClickEvent = {(selected) => onClickEventSearch(selected)}
      />
  </header>
  );
}
export { Header };