//Allow user to see all favorite gif 
//allow user to set a category 
//one category from db for each to start
//PUT /api/favorites --> for setting category on an image expects a query parameter and a data body
//is this also POSTing to the favorite_category database?
//id of gif and id of category to the favorite table

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// const { put } = require("../../../server/routes/favorite.router");
function FavoritesView() {

    const dispatch = useDispatch();
    const favoriteGifs = useSelector(store => store.favoriteReducer)
    const categories = useSelector(store => store.categoryReducer)
    console.log('logging categories', categories)


useEffect( () => {
    dispatch({type: 'FETCH_FAVORITES'})
    dispatch({type: 'FETCH_CATEGORIES'})
    // fetchCategories;
}, [])
//fetches favorite gifs from the DB
const fetchFavorites = () => {
    dispatch({type: 'FETCH_FAVORITES'})
    console.log(favoriteGifs);
}

//need to get the categories from the db to choose from
const fetchCategories = () => {
    dispatch({type: 'FETCH_CATEGORIES'})
}

// hey meghan when you end up calling the put request when 
// adding the categories use the route /api/favorite/${gifId} 
// and also send an array with the categories ids as the body


//need to update category in the db
// const addCategory = (gifId) => {
//     axios.put(`/api/favorite/${gifId}`)
//trying to figure out how to write the payload 
    // dispatchEvent({type: 'ADD_CATEGORY', payload:[{category} ]})

return (
    <>
        <h1>Favorite Gifs</h1>   
        <button onClick={fetchFavorites}>fetch favs</button>
      {favoriteGifs.map((gif) => (

    <div key={gif.id}>
      <img src={gif.url}/>
      {/* <button onClick={fetchCategories}>fetch categories</button>  */}
        {categories.map((category) => (
            <button key={category.id}>{category.name}</button>
        ))}
      
      </div>

     ))}
     </>)
}
  export default FavoritesView;