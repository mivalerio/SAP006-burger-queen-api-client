//import { createElement } from "react";

export function Card({ imagem, name, price }) {
  return (
    
      <div className="card_items">
        <img className="img-card" src={imagem} alt="imagem do produto" />
        <p>{name}</p>
        <p>{price}</p>
      </div>

  );
}

export function CardBurguer({ imagem, name, price, complement, flavor }) {
  return (
    <div className="card_items">
      <img className='img-card' src={imagem} alt="imagem do produto" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{complement}</p>
      <p>{flavor}</p>
    </div>
  );
}
