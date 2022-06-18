import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Categorias from './components/Categorias/Categorias';
import Cart from './components/Cart/Cart'
import CartProvider from './components/CartProvider/CartProvider';

function App() {

  return (
    <>
      <CartProvider>
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

            <Route path='/cart'>
              <Cart/>
            </Route>

          </Switch>

          {/*<Footer /> */}
        </BrowserRouter>
        </CartProvider>
    </>
  );
}

export default App;
