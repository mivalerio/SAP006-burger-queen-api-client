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
  });

  return (
    <>
      <header>
        <nav>
          <button type="submit" onClick={() => setMenu("breakfast")}>
            Café da Manha
          </button>
          <button type="submit" onClick={() => setMenu("allDay")}>
            All Day
          </button>
         
        </nav>
      </header>
      <main>
        {menu === "breakfast" &&
          breakfast.map((item) => {
            return (
              <Card imagem={item.image} name={item.name} price={item.price} />
            );
          })}

        {menu === "allDay" &&
          simpleBurgers.map((item) => {
            return (
              <CardBurguer
                imagem={item.image}
                name={item.name}
                price={item.price}
                complement={item.complement}
                flavor={item.flavor}
              />
            );
          })}
        {menu === "allDay" &&
          doubleBurgers.map((item) => {
            return (
              <CardBurguer
                imagem={item.image}
                name={item.name}
                price={item.price}
                complement={item.complement}
                flavor={item.flavor}
              />
            );
          })}
          {menu === "allDay" &&
          drinks.map((item) => {
            return (
              <CardBurguer
                imagem={item.image}
                name={item.name}
                price={item.price}
                complement={item.complement}
                flavor={item.flavor}
              />
            );
          })}
          {menu === "allDay" &&
          sides.map((item) => {
            return (
              <CardBurguer
                imagem={item.image}
                name={item.name}
                price={item.price}
                complement={item.complement}
                flavor={item.flavor}
              />
            );
          })}
      </main>
    </>
  );
}
