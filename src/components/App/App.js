import React from 'react';
import FavoritesView from '../FavoritesView/FavoritesView';
import axios from 'axios';
// import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Search/Search';


function App(props) {


  // const speedReducer = useSelector(store => store.speedReducer);

  // const dispatch = useDispatch();

  // axios.get(){};
  //renders the entire app t
  return (
    <div>
      <h1>Giphy Search!</h1>
      <FavoritesView />
    </div>
  );
}

export default App;
