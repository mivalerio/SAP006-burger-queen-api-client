import './carrinho.css';

export function Carrinho({ price, name, qtd, complement, flavor, onClick }) {
    return (
      
        <div className="carrinho">
          <p>{name}</p>
          <p>{price}</p>
          <p>{qtd}</p>
          <p>{complement}</p>
          <p>{flavor}</p>
          <button onClick={onClick} className="">Remover</button>
        </div>
  
    );
  }