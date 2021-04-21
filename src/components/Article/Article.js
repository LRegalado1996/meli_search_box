import React from 'react';
import './Article.scss';

const Article = ({
  article
}) => {
  const { pictures, description, title, price, sold_quantity, condition } = article,
    conditionInSpanish = condition === "new" ? "Nuevo" : "Usado",
    soldQuantity = sold_quantity ? " - " + sold_quantity + " vendidos" : "";

  return (
    <div className="Article">
      <div className="container description">

        {
          pictures &&
          pictures.length > 0 && (
            <div className="container_image">
              <img src={ pictures[0].url } alt={title} />
            </div>
          )
        }

        {
          description && (
            <div className="container_description">
              <p className="description_title">
                Descripción del producto
              </p>
              <p className="description_text" >
                { description }
              </p>
            </div>
          )
        }


      </div>
      <div className="container price"> 
        
        <div className="sold">
          { conditionInSpanish + soldQuantity } 
        </div>

        <h1 className="article_name">
          { title }
        </h1>

        <div className="article_price">
          { "$ " + price }
        </div>

        <button 
          type="submit"
          onClick={() => alert("Compradooo!")}
        >
          Comprar
        </button>
      </div>

        <div className="clear_fix"></div>

    </div>
  );
}
export { Article };