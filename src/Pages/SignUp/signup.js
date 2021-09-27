import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../../Pages/SignUp/signup.css";

export function SignUp() {
  //gerenciar os estados dos inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");
  const [funcao, setFuncao] = useState("");

  const criarNovoUsuario = async (NovoNome, Email, Senha, Funcao) => {
    //cadastro de usuario
    try {
      const response = await fetch("https://lab-api-bq.herokuapp.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: NovoNome,
          email: Email,
          password: Senha,
          role: Funcao,
          restaurant: "Pinup Burguer",
        }),
      });
      const json = await response.json();
      const token = json.token;
      const email = json.email;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      if (token) {
        console.log("usarioCadastrado");
      }
    } catch (json) {
      const codigo = json.code;
      if (codigo === 400 || codigo === 403) {
        throw new Error(json.message);
      }
    }

    //navegar pelo menu
  };

  return (
    <>
      <div className="signup">
        <h1>Cadastro</h1>
        <div className="cadastro-form">
          <form className="container-cadastro">
            <input
              type="name"
              name="name"
              placeholder="Nome"
              onChange={(event) => setNome(event.target.value)}
              value={nome}
            />
            <select
              name="Role"
              onChange={(event) => setFuncao(event.target.value)}
              value={funcao}
            >
              <option value="Cozinha">Cozinha</option>
              <option value="Salao">Salão</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
            />
            <input
              type="confirmPassword"
              name="passwordConfirm"
              placeholder="Senha"
              onChange={(event) => setconfirmaSenha(event.target.value)}
              value={confirmaSenha}
            />
            <button className='botao'
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                criarNovoUsuario(nome, email, senha, funcao);
              }}
            >
              Cadastrar
            </button>
            <Link to="/">Já tenho conta</Link>
          </form>
        </div>
      </div>
    </>
  );
}
