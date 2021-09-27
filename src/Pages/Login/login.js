import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import waitress from "../../img/waitress.png";

export function Login() {
  //gerenciar estados dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const Logar = async (Email, Senha) => {
    try {
      const response = await fetch("https://lab-api-bq.herokuapp.com/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Email,
          password: Senha,
        }),
      });
      const json = await response.json();
      const token = json.token;
      const email = json.email;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      if (token) {
        console.log("usarioLogado");
      }
    } catch (json) {
      const codigo = json.code;
      if (codigo === 400 || codigo === 403) {
        throw new Error(json.message);
      }
    }
    // se der bom ir para tela de menu
  };

  return (
    <>
      <div className="login">
        <h1>Pinup Burguer</h1>
        <h2>Login</h2>
        <div className="login-logo">
          <img src={waitress} alt="logo" />
        </div>
        <div className="login-form">
          <form className="container-login">
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
              onClick={(e) => {
                e.preventDefault();
                Logar(email, senha);
              }}
            >
              Entrar
            </button>
            <Link to="/signup">Cadastre Aqui</Link>
          </form>
        </div>
      </div>
    </>
  );
}
