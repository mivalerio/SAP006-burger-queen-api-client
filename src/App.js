import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SignUp} from './Pages/SignUp/signup';
import { Login} from './Pages/Login/login';
import { Menu} from './Pages/Menu/menu';

function App() {
  return (
    <Router>
      <Route path='/signup'>
        <SignUp/>
      </Route>

      <Route path='/menu'>  
        <Menu/>
      </Route>

      <Route exact path='/'>
        <Login/>
      </Route>
      
    </Router>
  );
}

export default App;
