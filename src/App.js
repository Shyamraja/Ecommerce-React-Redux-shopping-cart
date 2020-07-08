import React from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";


class App extends React.Component {
    constructor() {
      super();
      this.state = {
         products: data.products,
         ProductsInCart: localStorage.getItem("ProductsInCart")
         ? JSON.parse(localStorage.getItem("ProductsInCart"))
         : [],
      };
    }   
    addToCart = (product) => {
      const ProductsInCart = this.state.ProductsInCart.slice();
      let alreadyInCart = false;
      ProductsInCart.forEach((item) => {
        if (item._id === product._id) {
          item.count++;
          alreadyInCart = true;
        }
      });
      if(!alreadyInCart) {
        ProductsInCart.push({...product, count: 1 });
      }
      this.setState({ ProductsInCart });
      localStorage.setItem("ProductsInCart", JSON.stringify(this.state.ProductsInCart));
    };
    removeFromCart = (product) => {
      const ProductsInCart = this.state.ProductsInCart.slice();
      this.setState({
        ProductsInCart: ProductsInCart.filter((x) => x._id !== product._id),
      });
      localStorage.setItem(
        "ProductsInCart", 
        JSON.stringify(ProductsInCart.filter((x) => x._id !== product._id))
        );
    };
     createOrder = (order) => {
       alert("Save Order for" + order.name);
     };
    render() {
      return (
      <Provider store={store}>
         <div className="grid-container">
          <header>
            <a href="/">WELCOME TO OUR EXPRESS SHOP</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products addToCart={this.addToCart}>
                </Products>
              </div>
              <div className="sidebar">
                  <Cart 
                    ProductsInCart={this.state.ProductsInCart} 
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder}
                  />
              </div>
           </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </Provider>  
      );
    }
 }
export default App;