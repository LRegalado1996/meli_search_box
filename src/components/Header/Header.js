import React from 'react';
import './Header.scss';
import { SearchBox } from './../';
import logo from '../../assets/images/logo.svg';
import history from "../../services/history";

const Header = ({
  selectedSearch
}) => {
  return (
    <header className="Header">
      <img 
        className="logo_mercadolibre" 
        src={ logo } 
        alt="Mercado Libre logo" 
        onClick={() => history.push({ pathname : '/items', itemId : null }) }
      />
      <SearchBox 
        selected={selectedSearch}
      />
  </header>
  );
}
export { Header };