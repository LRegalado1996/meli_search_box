import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Header, Items, Article } from '../../components';
import { provider } from '../../services';
import { useParams } from "react-router-dom";

function Home() {

  const itemFromUrl = useParams().itemId;

  const [selected, getSelected] = useState(''),
    [allArticles, getallArticles] = useState([]),
    [item, getItem] = useState();

  useEffect(() => {
    getItem(itemFromUrl)
  }, [itemFromUrl] );

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
        <Article articleId={ item }/>
      )

    } else if ( allArticles.length !== 0 ) {

      return (
        <Items 
          articles = { allArticles }
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