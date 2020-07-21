import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {productListReducer, productDetailsReducer} from './reducers/productReducer';
import thunk from 'redux-thunk'
const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer
})
const composeEnchancer=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)))
export default store;