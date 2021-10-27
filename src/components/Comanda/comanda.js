export function Comanda({ cliente, mesa, id, qtd,itens }) {
  
    return (
      
        <div >
          <p>{cliente}</p>
          <p>{mesa}</p>
          <p>{qtd}</p>
          <p>{id}</p>
          <section>{itens}</section>
        </div>
  
    );
  }

  