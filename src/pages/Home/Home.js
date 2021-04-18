import React, { useState } from 'react';
import './Home.scss';
import { Header } from '../../components';

function Home() {
  const [selected, getSelected] = useState('');

  return (
    <div className="Home">
      
      <Header 
        selectedSearch = { selected }
        getSelectedSearch = { (selected) => getSelected(selected) }
        onClickEventSearch = {() => console.log(selected) }
      />

    </div>
  );
};

export { Home };