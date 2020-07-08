import React, { Component } from "react";
import {connect} from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";


class Filter extends Component {
  render() {
    return (
      !this.props.filteredProducts? (
       <div> Loading...</div>
    ): (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Products
        </div>
        <div className="filterProduct-price">
          Price Category{" "}
          <select 
           value={this.props.sortPrice} 
              onChange= {(e) => 
                this.props.filterProductsPrice(
                 this.props.products,
                 e.target.value
                 )
            }>
            <option value="latest">Latest Products</option>
            <option value="lowestToHighest">Low To High Price</option>
            <option value="highestToLowest">High To Low Price</option>
          </select>
        </div>
        <div className="filterProduct-size">
          Size Category{" "}
          <select 
           value={this.props.size} 
             onChange={(e) => 
             this.props.filterProductsSize(
                this.props.products, 
                e.target.value
                )
              }>
            <option value="">All Products</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    )
    );
  }
}
export default connect(
  (state) => ({
  size: state.products.size,
  sort: state.products.sort,
  products: state.products.items,
  filterProducts: state.products.filteredItems,
}),
{
filterProducts,
sortProducts,
}
)(Filter);