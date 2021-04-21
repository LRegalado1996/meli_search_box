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
    if (!newItem) return ;
    
    try {
      const getArticle = await provider.getArticle(newItem.id);

      if (
        getArticle && 
        getArticle.status === 200 &&
        getArticle.data
      ) {

        let article = getArticle.data;

        const getArticleDescription = await provider.getArticleDescription(newItem.id);

        if (
          getArticleDescription && 
          getArticleDescription.status === 200 &&
          getArticleDescription.data && 
          getArticleDescription.data.plain_text
        ) article = { ...article, description : getArticleDescription.data.plain_text }

        getItem(article);
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