//import { createElement } from "react";

export function Card({ imagem, name, price }) {
  return (
    <div className="card_itens">
        <img src={imagem} alt="imagem do produto" />
        <p>{name}</p>
        <p>{price}</p>
    </div>
  );
}

export function CardBurguer({ imagem, name, price, complement, flavor }) {
  return (
    <div class="card_itens">
        <img src={imagem} alt="imagem do produto" />
        <p>{name}</p>
        <p>{price}</p>
        <p>{complement}</p>
        <p>{flavor}</p>
    </div>
  );
}
