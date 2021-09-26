import React from "react";
import { Link} from 'react-router-dom';

export const SignUp = () => {
    //gerenciar os estados dos inputs

    const criarNovoUsuario = () =>{
        //cadastro de usuario
        console.log('cadastrar user');

        //navegar pelo menu
    };

  return(
      <>
        <h1>Cadastro</h1>
        <form>
            <input type='name' name='name' placeholder='Nome'/>
            <select name='Role'>
                <option value='Cozinha'>Cozinha</option>
                <option value='Salao'>Salão</option>
            </select>
            <input type='email' name='email' placeholder='E-mail'/>
            <input type='password' name='password' placeholder='Senha'/>
            < Link to="/">Já tenho conta</Link>
        </form>
      </>
  );  
}