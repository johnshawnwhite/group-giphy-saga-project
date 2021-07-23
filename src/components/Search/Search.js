import react from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchItem from './SearchItem';

function Search(){

    const[search, setSearch] = useState('');

    const searchReducer = useSelector(store => store.searchReducer);

    const dispatch = useDispatch();

    const handleSearch = event => {
        event.preventDefault();
        dispatch({
            type: 'FETCH_SEARCH_GIF',
            payload: search,
        });
        // alert("You are now searching");
        console.log('reducer', searchReducer);
    } ;
    
    return(
        <div>
            <>
        <h1>Look for your favorite GIPHY!</h1>
        <h2>
              <input type="text" placeholder="Share with me"
              onChange={(event) =>setSearch
              (event.target.value)} />
              <button onClick={handleSearch}> Search</button>
              
        </h2>
       
            {searchReducer.map((search) => {
                return (
                    <SearchItem key={search.id} search={search}/>
                );
            })}
        
          </>
       </div>
       
    )
}

export default Search;