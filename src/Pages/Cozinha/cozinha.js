import {React, useState, useEffect} from "react";
/*import{ Link } from 'react-router-dom'
import { Comanda } from "../../components/Comanda/comanda";
import { Carrinho } from "../../components/carrinho/carrinho";
import { CardCozinha } from "../../components/Cards/cards";*/
import './cozinha.css';

export function Cozinha() {

    const token = localStorage.getItem('token');
    const [preparerOrder, setPreparerOrder] = useState([]);
    const url = 'https://lab-api-bq.herokuapp.com/orders/';

    useEffect(() => {
        fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        })
          .then((response) => response.json())
          .then((orders) => {
         
                    const ordersPending = orders.filter((itens) =>
                      itens.status.includes('pending') 
            );
            setPreparerOrder(ordersPending);
          });
      })

  const handleStatusOrder = (id, newStatus) => {
    const status = { status: newStatus };
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    })
      .then((response) => {
        response.json().then(() => {
          const order = preparerOrder;
          return order;
        });
      });
  };

    return (
      <>
        <header
        name="Cozinha"
        />

        <section className="orders-container">
          {preparerOrder.map((order) => {
            return (
              <section className="orders" key={order.id}>
                <div className="kitchenCard">
                  <h1> {order.status.replace('pending', 'Pendente').replace('preparing', 'Em andamento')} </h1>
                  <p>ID: {order.id} </p>
                  <p>Cliente: {order.client_name} </p>
                  <p>Mesa: {order.table} </p>
                  <time>
                    {`${new Date(order.createdAt).toLocaleDateString('pt-br')} - ${new Date(order.createdAt).toLocaleTimeString('pt-br', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}h`}
                  </time>
                  <hr />
                  {order.Products.map((items, index) => (
                    <div key={index}>
                      <p> {items.qtd} {items.name}</p>
                      <p>{items.flavor}</p>
                      <p>{items.complement}</p>
                      <hr />
                    </div>
                  ))}
                  <button text="Despachar" className='button-global' onClick={() => handleStatusOrder(order.id, 'ready')}>Finalizar</button>
                </div>
              </section>
            );
        })}
        </section>
    </>
 );
}