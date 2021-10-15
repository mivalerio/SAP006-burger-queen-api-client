import { React, useEffect, useState } from "react";
import { Menu } from "../../services/menu";
//import { useHistory } from 'react-router-dom';
//import { Navigator } from "../../rotas";
//import { Select, SelectOption } from "../../components/select";
import { Card, CardBurguer } from '../../components/Cards/cards';
import { Carrinho } from '../../components/carrinho/carrinho';


export function NovoPedido() {
  //const history = useHistory();
  const userToken = localStorage.getItem("token");
  console.log(userToken);

  const [breakfast, setBreakfast] = useState([]);
  const [simpleBurgers, setSimpleBurgers] = useState([]);
  const [doubleBurgers, setDoubleBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [pedido, setPedido] = useState([]);

  const [menu, setMenu] = useState("breakfast");

  useEffect(() => {
    Menu(userToken).then((lista) => {
      setBreakfast(lista.filter((item) => item.type === "breakfast"));
      const hamb = lista.filter((item) => item.sub_type === "hamburguer");
      setSimpleBurgers(
        hamb.filter((item) => item.name === "Hambúrguer simples")
      );
      setDoubleBurgers(
        lista.filter((item) => item.name === "Hambúrguer duplo")
      );
      setSides(lista.filter((item) => item.sub_type === "side"));
      setDrinks(lista.filter((item) => item.sub_type === "drinks"));
    });
  }, [userToken]);

  const adicionar = (e, item) => {
    e.preventDefault();
    const elemento = pedido.find((res) => res.id === item.id);
    if (elemento) {
      elemento.qtd += 1;
      setPedido([...pedido]);
    } else {
      item.qtd = 1;
      item.subtotal = item.price;
      setPedido([...pedido, item]);
    }
  };

  const remover = (e, item, index) => {
    e.preventDefault();
    const elemento = pedido.find((res) => res.id === item.id);
    if (elemento.qtd !== 0) {
      elemento.qtd -= 1;
      setPedido([...pedido]);
    }
    if (elemento.qtd === 0) {
      const listaPedido = pedido;
      listaPedido.splice(index, 1);
      setPedido([...listaPedido]);
    }
  };

  const calcularTotal = (itens) => {
    const totalPreco = itens.reduce((acumular, array) => {
      const { qtd, price } = array;
      acumular = Number(qtd * price + acumular);
      return acumular;
    }, 0);

    return totalPreco;
  };
  const total = calcularTotal(pedido);

  return (
    <>
      <header>
        <nav>
          <button type="submit" onClick={() => setMenu("breakfast")}>
            Café da Manha
          </button>
          <button type="submit" onClick={() => setMenu("allDay")}>
            Hambúrguer
          </button>
          <button type="submit" onClick={() => setMenu("drinks")}>
            Sucos
          </button>
          <button type="submit" onClick={() => setMenu("side")}>
            Acompanhamento
          </button>
        </nav>
      </header>
      <main>
        <section className="cards">
          {menu === "breakfast" &&
            breakfast.map((item) => {
              return (
                <Card
                  key={item.id}
                  imagem={item.image}
                  name={item.name}
                  price={item.price}
                  onClick={(e) => adicionar(e, item)}
                  
                />
              );
            })}
        </section>

        <section className="cards">
          {menu === "allDay" &&
            simpleBurgers.map((item) => {
              return (
                <CardBurguer
                  key={item.id}
                  imagem={item.image}
                  name={item.name}
                  price={item.price}
                  complement={item.complement}
                  flavor={item.flavor}
                  onClick={(e) => adicionar(e, item)}
                  
                />
              );
            })}
        </section>

        <section className="cards">
          {menu === "allDay" &&
            doubleBurgers.map((item) => {
              return (
                <CardBurguer
                  key={item.id}
                  imagem={item.image}
                  name={item.name}
                  price={item.price}
                  complement={item.complement}
                  flavor={item.flavor}
                  onClick={(e) => adicionar(e, item)}
                  
                />
              );
            })}
        </section>

        <section className="cards">
          {menu === "drinks" &&
            drinks.map((item) => {
              return (
                <Card
                  key={item.id}
                  imagem={item.image}
                  name={item.name}
                  price={item.price}
                  onClick={(e) => adicionar(e, item)}
                  
                />
              );
            })}
        </section>

        <section className="cards">
          {menu === "side" &&
            sides.map((item) => {
              return (
                <Card
                  key={item.id}
                  imagem={item.image}
                  name={item.name}
                  price={item.price}
                  onClick={(e) => adicionar(e, item)}
                  
                />
              );
            })}
        </section>
        
        {pedido.map((item, index) => (
          <div key={index}>
            {" "}
            <Carrinho
              name={item.name}
              price={item.price}
              qtd={item.qtd}
              flavor={item.flavor}
              complement={item.complement}
              onClick={(e) => remover(e, item, index)} 

            />{" "}
          </div>
        ))}
        <h2>TOTAL: R${total},00</h2>
        <button type="submit">
            Preparar
          </button>
          <button type="submit">
            Home
          </button>
 

      </main>
    </>
  );
}
