import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
         products: data.products,
         addedProductsInCart:[],
         size: "",
         sortPrice: "",
      };
    }
    addToCart = (product) => {
      const addedProductsInCart = this.state.addedProductsInCart.slice();
      let alreadyInCart = false;
      addedProductsInCart.forEach((item) => {
        if (item._id === product._id) {
          item.count++;
          alreadyInCart = true;
        }
      });
      if(!alreadyInCart){
        addedProductsInCart.push({...product, count: 1 });
      }
      this.setState({ addedProductsInCart});
    };
    sortingPriceOfProducts = (event) => {
      const sort = event.target.value;
      console.log(event.target.value);
      this.setState((state) => ({
         sortPrice: sort,
         products: this.state.products
          .slice()
          .sort((a, b) =>
            sort === "lowestToHighest"
              ? a.price > b.price
                ? 1
                : -1
               : sort === "highestToLowest"
              ? a.price < b.price
                ? 1
                : -1
               : a._id < b._id
              ? 1
              : -1
          ),
       }));
    };
    filteringSizeOfProducts = (event) => {
      console.log(event.target.value);
      if (event.target.value === "") {
        this.setState({ size: event.target.value, products: data.products });
      } else {
        this.setState({
           size: event.target.value,
           products: data.products.filter(
             (product) => product.availableSizes.indexOf(event.target.value) >= 0
           ),
         });
       }
     };
    render() {
      return (
        <div className="grid-container">
          <header>
            <a href="/">Ecommerce Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter
                   count={this.state.products.length}
                   size={this.state.size}
                   sortPrice={this.state.sort}
                   filterProductsSize={this.filteringSizeOfProducts}
                   sortProductsPrice={this.sortingPriceOfProducts}>
                </Filter>
                <Products 
                products={this.state.products} 
                addToCart={this.addToCart}>
                </Products>
              </div>
              <div className="sidebar">
                <Cart addedProductsInCart={this.state.addedProductsInCart} />
                </div>
           </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      );
   }
 }
export default App;