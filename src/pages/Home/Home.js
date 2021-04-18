import React, { useState } from 'react';
import './Home.scss';
import { Header } from '../../components';
import { provider } from '../../services';

function Home() {
  const [selected, getSelected] = useState('');

  const getArticles = async () => {
    try {
      const articles = await provider.getArticles(selected);
      console.log(articles)
    } catch (e) {
      handleToErrors(e)
    }
  }

  const handleToErrors = (error) => {
    const backendError = error.message ? error.message : "Error imprevisto";
    console.log(backendError)
  };

  return (
    <div className="Home">

      <Header 
        selectedSearch = { selected }
        getSelectedSearch = { (selected) => getSelected(selected) }
        onClickEventSearch = {() => getArticles(selected) }
      />

    </div>
  );
};

export { Home };