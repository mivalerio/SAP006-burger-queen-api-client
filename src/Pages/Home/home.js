import { React, useState } from "react";
import { Navigator } from "../../rotas";
import { useHistory } from "react-router-dom";
import "../Home/home.css";

export function Home() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const entrarNovoPedido = () => {
    if (token) {
      Navigator(history, "/novoPedido");
      console.log("Pagina de Pedidos");
    } else {
      alert("Tente Novamente");
    }
  };

  const entrarPedidoPronto = () => {
    if (token) {
      Navigator(history, "/pedidoPronto");
      console.log("Pagina de Pedido Pronto");
    } else {
      alert("Tente Novamente");
    }
  };

  const entrarPedidoEncerrado = () => {
    if (token) {
      Navigator(history, "/pedidoEncerrado");
      console.log("Pagina de Encerrado");
    } else {
      alert("Tente Novamente");
    }
  };

  const cozinha = () => {
    if (token) {
      Navigator(history, "/cozinha");
      console.log("Cozinha");
    } else {
      alert("Tente Novamente");
    }
  };

  return (
    <>
      <div className="home">
        <div className="container-botoes">
          <button className="botao" type="submit" onClick={entrarNovoPedido}>
            Novo Pedido
          </button>
          <button className="botao" type="submit" onClick={entrarPedidoPronto}>
            Pedido Pronto
          </button>
          <button
            className="botao"
            type="submit"
            onClick={entrarPedidoEncerrado}
          >
            Pedido Encerrado
          </button>
          <button className="botao" type="submit" onClick={cozinha}>
            Cozinha
          </button>
          <button className="botao" type="submit">
            Sair
          </button>
        </div>
      </div>
    </>
  );
}
