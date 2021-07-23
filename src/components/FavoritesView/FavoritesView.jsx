//Allow user to see all favorite gif 
//allow user to set a category 
//one category from db for each to start
//PUT /api/favorites --> for setting category on an image expects a query parameter and a data body
//is this also POSTing to the favorite_category database?
//id of gif and id of category to the favorite table

import { useEffect } from "react";

const { put } = require("../../../server/routes/favorite.router");
function FavoritesView() {
// const favoriteReducer = (state = [], action => {
//     switch (action.type) {
//         case 'SET_FAVORITES':
//             return action.payload;
//         default:
//             return state;
//     }
// })

// const categoryReducer = (state = [], action => {
//     switch (action.type) {
//         case 'SET_CATEGORY':
//             return action.payload;
//         default:
//             return state;
//     }
// })
// //not sure if my yield put is correct
// function* fetchFavorites() {
//     try{
//         const favoritesResponse = yield axios.get('/favorite');
//         yield put({ type: 'SET_FAVORITES', payload: favoritesResponse.data});
//     } catch (error) {
//         console.log('Error fetching favorites', error);
//     }

// }

// function* fetchCategories() {
//     try{
//         const categoryResponse = yield axios.get('/api/category');
//         yield put({ type: 'SET_CATEGORIES', payload: categoryResponse.data});
//     } catch (error) {
//         console.log('Error fetching categories', error);
//     }

// }

useEffect( () => {
    fetchFavorites;
}, [])

const fetchFavorites = () => {
    dispatchEvent({type: 'FETCH_FAVORITES'})
}


// hey meghan when you end up calling the put request when 
// adding the categories use the route /api/favorite/${gifId} 
// and also send an array with the categories ids as the body

const addFavoriteCategory = () => {
    dispatchEvent({type: 'ADD_CATEGORY', payload: })
}
return (
    <>
    <div>
        <h1>Favorite Gifs</h1>    
      <p>Results go here</p>
      <button > + Category </button>
    </div>
    </>
  );
}
  export default FavoritesView;