import React from 'react';
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
      <Search />
    </div>
  );
}

export default App;
