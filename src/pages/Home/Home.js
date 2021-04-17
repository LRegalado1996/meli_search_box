import React, { useState } from 'react';
import './Home.scss';
import logo from '../../assets/images/logo.svg';

function Home() {

  return (
    <div className="Home">
      <header className="header_home">
      <img src={logo} alt="Mercado Libre logo" />
      </header>  
    </div>
  );
};

export { Home };