export function Comanda({ cliente, mesa, id, qtd }) {
    return (
      
        <div >
          <p>{cliente}</p>
          <p>{mesa}</p>
          <p>{qtd}</p>
          <p>{id}</p>
        </div>
  
    );
  }