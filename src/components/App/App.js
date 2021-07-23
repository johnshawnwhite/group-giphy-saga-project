import React from 'react';
import axios from 'axios';
// import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Search/Search';

import { HashRouter as Router, Route, Link } from "react-router-dom";


function App(props) {

  //renders the entire app t
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search />
      <Router>
        <Header />
        <Route path='/'exact>
          <Link to="/pizzas">
            <div>
              <button >New order</button>
            </div>
          </Link>
        </Route>
      
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/info'>
          <CustomerInfo />
        </Route>
          <Route path='/checkout' component={Checkout}/>
        <Route path='/admin'>
          <Admin getOrders={getOrders}/>
        </Route>
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
    </Router>
    </div>
  );
}

export default App;
