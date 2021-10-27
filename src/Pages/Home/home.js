import { React} from "react";
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
