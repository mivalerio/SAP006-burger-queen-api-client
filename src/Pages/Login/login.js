import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Login/login.css";
import waitress from "../../img/waitress.png";
import { Navigator } from "../../rotas";
import { Logar } from '../../services/logar'

export function Login() {
  //gerenciar estados dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  const entrar = async (e)=>{
    e.preventDefault();
    try {
      const token = await Logar(email, senha)
      if (token) {
        Navigator(history,"/home");
        console.log("usarioLogado");
      }
  
    } catch (error) {
        alert("Tente Novamente") 
    }
    
  }

  
  return (
    <>
      <div className="login">
        <div className='cabecalho'>
        <h1>Pinup</h1>
        <h1>Burguer</h1>
        </div>
      
          <img src={waitress} alt="logo" />
      
        <div className="login-form">
          <form className="container-inputs">
            <input id='e-mail'
              type="email"
              nome="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <input id='senha'
              type="password"
              nome="password"
              placeholder="Senha"
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
            />
        <button className='botao'
              type="submit"
              onClick={entrar}            >
              Entrar
            </button>    
          </form>
        </div>
        <div>
        
            <Link to="/signup">Não tem cadastro?Cadastre Aqui</Link>
            </div>
      </div>
    </>
  );
}
