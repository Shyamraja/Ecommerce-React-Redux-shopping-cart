import React, { Component } from "react";
import formatCurrency from "../util";

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
          <div className="cart">
          <ul className="cart-items">
            {addedProductsInCart.map(item =>(
              <li key={item._id}>
                 <div>
                    <img src={item.image} alt={addedProductsInCart.title}></img>
                    </div>
                   <div>
                      <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} x {item.count} {" "}
                        <button onClick={()=>this.props.removefromCart(item)}>
                         Remove
                        </button>
                    </div>
                  </div>
                </li>
             ))}
          </ul>
        </div>
      </div> 
     );
 }      
}
