import { React, useEffect, useState } from "react";
import { Menu } from "../../services/menu";
//import { useHistory } from 'react-router-dom';
//import { Navigator } from "../../rotas";
//import { Select, SelectOption } from "../../components/select";
import { Card, CardBurguer} from "../Menu/menu";
import '../Menu/menu.css'

export function NovoPedido() {
  //const history = useHistory();
  const userToken = localStorage.getItem("token");
  console.log(userToken);

  const [breakfast, setBreakfast] = useState([]);
  const [simpleBurgers, setSimpleBurgers] = useState([]);
  const [doubleBurgers, setDoubleBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

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
  },[userToken]);

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
              <Card key={item.id} imagem={item.image} name={item.name} price={item.price} />
          
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
              />
            );
          })}
          </section>
        
          
      </main>
    </>
  );
}
