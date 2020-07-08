import { FETCH_PRODUCTS } from "../types";
import {FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS_BY_PRICE} from "../types";
 
export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: data
      });
    });
};
 export const filterProducts = (products, size) => (dispatch) =>{
   dispatch({
     type: FILTER_PRODUCTS_BY_SIZE,
     payload: {
       size: size,
       items: size === ""
       ? products
       :products.filter(x=> x.availableSizes.indexOf(size) >= 0),
     },
   });
 };

 export const sortProducts = (filteredProducts, sort) => (dispatch) =>{
   const sortedProducts = filterProducts.slice();
   if (sort === "latest") {
     sortedProducts.sort((a,b) => (a._id > b._id ? 1: -1));
   }else {
     sortedProducts.sort((a, b) =>
       sort === "lowestToHighest"
         ?  a.price > b.price
           ? 1 
           : -1
         :a.price > b.price
         ? -1 
         : 1
     );
   }
   dispatch({
     type: FILTER_PRODUCTS_BY_PRICE,
     payload:{
       sort:sort,
       items: sortedProducts,
     },
   });
 };