import React, { useState } from 'react';
import './Home.scss';
import { Header, Items } from '../../components';
import { provider } from '../../services';

function Home() {
  const [selected, getSelected] = useState(''),
    [allArticles, getallArticles] = useState([]),
    [item, getItem] = useState();

  const getArticles = async () => {
    try {
      const articles = await provider.getArticles(selected);
      if (
        articles && 
        articles.status === 200 &&
        articles.data &&
        articles.data.results
      ) {
        getallArticles(articles.data.results);
      }
    } catch (e) {
      handleToErrors(e)
    }
  };

  const handleToErrors = (error) => {
    const backendError = error.message ? error.message : "Error imprevisto";
    console.log(backendError)
  };

  const renderArticles = () => {

    if (item) {

      return (
        <h1>Item will be here</h1>
      )

    } else if ( allArticles.length !== 0 ) {

      return (
        <Items 
          articles = { allArticles }
          onClikArticle = { (item) => getItem(item) }
        /> 
      )

    }

  }

  return (
    <div className="Home">

      <Header 
        selectedSearch = { selected }
        getSelectedSearch = { (selected) => getSelected(selected) }
        onClickEventSearch = {() => getArticles(selected) }
      />

      <div className="container_articles">
        { renderArticles() }   
      </div>  

    </div>
  );
};

export { Home };