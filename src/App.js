import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/producto/:id">
            <ItemDetailContainer />
          </Route>

          {/*}
          <Route exact path="/categoria/:categoriaId">
            <ItemListContainer  />     
          </Route>   
          */}


        </Switch>
        {/*<Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
