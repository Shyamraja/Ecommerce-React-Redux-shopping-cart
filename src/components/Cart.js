import React, { Component } from "react";

export default class Cart extends Component {
    render() {
        const {  addedProductsInCart } = this.props;
        return (
          <div>
              { addedProductsInCart.length === 0? (
                <div className="cart cart-header">Please Add Items To The Cart</div>
             ) : (
               <div className="cart cart-header">
                   You have {addedProductsInCart.length} Products in the cart{" "}                  
                </div>
             )}
           </div>
        );
    }      
}
