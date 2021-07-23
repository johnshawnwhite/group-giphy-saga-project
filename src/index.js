import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App/App';


//Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Saga Imports
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from '@redux-saga/core/effects';

// *****Reducers******
//Favorite reducer
const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}
//category reducer
const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
        default:
            return state;
    }
}
//Searched gifs reducer

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

// ***** Saga ******
function* rootSaga(){
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    yield takeEvery('FETCH_SEARCH_GIF', fetchSearchGifs)
}

//GET Sagas
function* fetchFavorites() {
    try{
        const favoritesResponse = yield axios.get('/api/favorite');
        yield put({ type: 'SET_FAVORITES', payload: favoritesResponse.data});
    } catch (error) {
        console.log('Error fetching favorites', error);
    }
}
function* fetchCategories() {
    try{
        const categoryResponse = yield axios.get('/api/category');
        yield put({ type: 'SET_CATEGORY', payload: categoryResponse.data});
    } catch (error) {
        console.log('Error fetching categories', error);
    }
}
function* fetchSearchGifs(action) {
    try{
        const categoryResponse = yield axios.get(`/api/giphy/${action.payload}`);

        yield put({ type: 'SET_SEARCH', payload: categoryResponse.data.data});

    } catch (error) {
        console.log('Error searching gifs', error);
    }
}

//POST Sagas
function* postFavorites(ACTION) {
    try{
        yield axios.post('/api/favorite', ACTION.PAYLOAD);
        yield put({ type: 'SET_FAVORITES', payload: favoritesResponse.data});
    } catch (error) {
        console.log('Error fetching favorites', error);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Create store for reducers and middleware
const storeInstance = createStore(
    combineReducers({
        searchReducer,
        favoriteReducer,
        categoryReducer
    }),
    //apply logger here
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store=
    {storeInstance}>
        <App />
        </Provider>, document.getElementById('root'));
