import React from "react";
import{ Link } from 'react-router-dom'

export const Cozinha = () =>{




 return (
     <>
        <h1>Em construção</h1>
        <form>
            <input type= "email" nome="email" placeholder="E-mail" />
            <input type= "password" nome="password" placeholder="Senha" />
            <button type='submit' >Entrar</button>
            < Link to="/signup">Cadastre Aqui</Link>
        </form>
     </>   
 );
}; 
//get all orders