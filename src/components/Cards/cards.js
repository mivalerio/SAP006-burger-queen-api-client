import './cards.css'

export function Card({ imagem, name, price,onClick }) {
  return (
    
      <div className="card_items">
        <img className="img-card" src={imagem} alt="imagem do produto" />
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={onClick} className="">Add</button>
      </div>

  );
}

export function CardBurguer({ imagem, name, price, complement, flavor, onClick }) {
  return (
    <div className="card_items">
      <img className='img-card' src={imagem} alt="imagem do produto" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{complement}</p>
      <p>{flavor}</p>
      <button onClick={onClick} className="">Add</button>
    </div>
  );
}
