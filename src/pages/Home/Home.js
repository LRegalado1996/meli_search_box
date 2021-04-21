import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Header, Items, Article } from '../../components';
import { useParams, useLocation } from "react-router-dom";

function Home() {

  const itemFromUrl = useParams().itemId,
    searchFromUrl = useQuery().get("search");

  const [selected, getSelected] = useState(),
    [item, getItem] = useState();

  useEffect(() => {
    getItem(itemFromUrl)
  }, [itemFromUrl] );

  useEffect(() => {
    getSelected(searchFromUrl)
  }, [searchFromUrl] );

  const renderArticles = () => {

    if (item) {
      return (
        <Article articleId={ item }/>
      )

    } else if (!selected) {
      return '' 

    } else  {

      return (
        <Items 
          selectArticle = { selected }
        /> 
      )

    }

  }
  
  return (
    <div className="Home">

      <Header 
        selectedSearch = { selected }
      />

      <div className="container_articles">
        { renderArticles() }   
      </div>  

    </div>
  );
};

export { Home };

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
