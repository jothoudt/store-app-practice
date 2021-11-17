import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
//components
import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage';
import ProductDetails from '../ProductDetails/ProductDetails';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
//css
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/registration'>
              <RegistrationPage />
            </Route>
            <Route exact path='/product_details/:id'>
              <ProductDetails />
            </Route>
            <Route exact path='/shopping_cart'>
              <ShoppingCart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
