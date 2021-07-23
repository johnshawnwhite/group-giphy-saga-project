import React from 'react';
import FavoritesView from '../FavoritesView/FavoritesView';
import axios from 'axios';
// import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Search/Search';

import { HashRouter as Router, Route, Link } from "react-router-dom";


function App(props) {

  //renders the entire app t
  return (
    <div>
      
      <Router>
        <Route path='/'>
          <h1>Giphy Search!</h1>
          <Link to="/favorites">
            <div>
              <button >View Favorites</button>
            </div>
          </Link>
          <Link to="/search">
            <div>
              <button >Search</button>
            </div>
          </Link>
        </Route>
        
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
