import { 
     FETCH_PRODUCTS,
     FILTER_PRODUCTS_BY_SIZE,
     FILTER_PRODUCTS_BY_PRICE,
 } from "../types";
//import nodemon from "nodemon";
 
export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            };
        case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items,
                };
        case FETCH_PRODUCTS:
           return { items:action.payload, filteredItems: action.payload };
        default:
            return state;
    }
};
 