import React, { useState } from 'react';
import './Home.scss';
import { Header, Items, Article } from '../../components';
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

  const getArticle = async (newItem) => {
    console.log(newItem)
    if (!newItem) return ;
    
    try {
      const article = await provider.getArticle(newItem.id);
      console.log(article);

      if (
        article && 
        article.status === 200 &&
        article.data
      ) {
        getItem(article.data);
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
      console.log(item)
      return (
        <Article article={ item }/>
      )

    } else if ( allArticles.length !== 0 ) {

      return (
        <Items 
          articles = { allArticles }
          onClikArticle = { (item) => getArticle(item) }
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