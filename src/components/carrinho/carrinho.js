import './carrinho.css';

export function Carrinho({ price, name, qtd, complement, flavor, onClick,children }) {
    return (
      
        <div className="carrinho-card">
          <h1 className='nome-carrinho'>{name}</h1>
          <p>R$:{price},00</p>
          <p>Quantidade:{qtd}</p>
          <p>{complement}</p>
          <p>{flavor}</p>
          <button onClick={onClick} className="container-botoes">{children}</button>
          
        </div>
  
    );
  }