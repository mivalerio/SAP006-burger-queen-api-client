import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { SignUp} from './Pages/SignUp/signup';
import { Login} from './Pages/Login/login';
import { Home } from './Pages/Home/home';
import { PedidoPronto } from './Pages/Pedidos/pedidoPronto';
import { NovoPedido} from './Pages/Pedidos/novoPedido';
import { Cozinha} from './Pages/Cozinha/cozinha'

function App() {
  return (
    <BrowserRouter>
      <Switch>

      <Route path='/signup'>
        <SignUp/>
      </Route>

      <Route path='/home'>  
        <Home/>
      </Route>

      <Route path='/pedidoPronto'>  
       <PedidoPronto/>
      </Route>

      <Route path='/novoPedido'>  
       <NovoPedido/>
      </Route>

      <Route path='/cozinha'>  
       <Cozinha/>
      </Route>

      <Route exact path='/'>
        <Login/>
      </Route>
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
