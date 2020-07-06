import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import { productsReducer } from "./reducers/productReducers";

const initialState = {};
const ComposeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
     combineReducers({
        products: productsReducer,
     }),
     initialState,
     ComposeEnhancer(applyMiddleware())
);
export default store;  