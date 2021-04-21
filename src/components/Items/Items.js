import React from 'react';
import './Items.scss';

const Items = ({
  articles,
  onClikArticle
}) => {

  const renderArticle = (article) => {
    const { thumbnail, title, price, address, id } = article;
    
    return (
      <div 
        className="item"
        onClick={() => onClikArticle(article)} 
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
      { articles.map(article => renderArticle(article) ) }
    </div>
  );
}
export { Items };