import React, { useState, useEffect } from 'react';
import './Items.scss';
import history from "../../services/history";
import { provider } from '../../services';

const Items = ({
  selectArticle
}) => {

  const [allArticles, getallArticles] = useState([]);

  useEffect(() => {
    async function getArticles(selected) {
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
    
    getArticles(selectArticle)
  }, [selectArticle]);


  const renderArticle = (article) => {
    const { thumbnail, title, price, address, id } = article;
    
    return (
      <div 
        className="item"
        onClick={() => history.push({ pathname : '/items/' + id }) } 
        key={id}
      >

        <div className="container image">
          <img src={ thumbnail } alt="Mercado Libre logo" />
        </div>

        <div className="container desciption">
          <p className="price">$ { price }</p>
          <h3>{ title }</h3>
        </div>

        <div className="container address">
          <p>
            { address.city_name }
            <br />
            { address.state_name }
          </p>
        </div>

      </div>
    )

  }

  return (
    <div className="Items">
      { allArticles.map(article => renderArticle(article) ) }
    </div>
  );
}
export { Items };

const handleToErrors = (error) => {
  const backendError = error.message ? error.message : "Error imprevisto";
  console.log(backendError)
};