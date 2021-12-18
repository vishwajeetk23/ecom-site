
import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart';







function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <div className="banner">
              <img src="https://m.media-amazon.com/images/I/71XfUgh4QVL._SX1500_.jpg" alt="" />
            </div>
            <Product/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
