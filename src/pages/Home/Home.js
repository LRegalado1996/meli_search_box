import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Header, Items, Article } from '../../components';
import { useParams } from "react-router-dom";

function Home() {

  const itemFromUrl = useParams().itemId;

  const [selected, getSelected] = useState(''),
    [item, getItem] = useState();

  useEffect(() => {
    getItem(itemFromUrl)
  }, [itemFromUrl] );

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
        onClickEventSearch = {(value) => getSelected(value)  }
      />

      <div className="container_articles">
        { renderArticles() }   
      </div>  

    </div>
  );
};

export { Home };