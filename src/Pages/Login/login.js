import React from "react";
import{ Link } from 'react-router-dom'

export const Login = () =>{
    

    //gerenciar estados dos inputs

    const Logar = (e) => {
        e.preventDefault();     
        console.log("fazer requisição na api em /auth");
        // se der bom ir para tela de menu
    };

 return (
     <>
        <h1>Login</h1>
        <form>
            <input type= "email" nome="email" placeholder="E-mail" />
            <input type= "password" nome="password" placeholder="Senha" />
            <button type='submit' onClick={Logar}>Entrar</button>
            < Link to="/signup">Cadastre Aqui</Link>
        </form>
     </>   
 );
};