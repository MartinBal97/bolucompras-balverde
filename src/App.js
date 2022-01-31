import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Categorias from './components/Categorias/Categorias';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Switch>

          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route path="/categoria/:categoriaName">
            <Categorias />
          </Route>
   
          

          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>

        </Switch>

        {/*<Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
