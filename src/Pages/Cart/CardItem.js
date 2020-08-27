import React, { Component } from "react";

class CardItem extends Component {
  state = {
    itemList: "",
    error: false,
  };

  handleResult = () => {};
  subtotal;
  render() {
    return (
      <div>
        <div className="cartItem">
          <img className="mainImg" src={this.props.img} alt="productImg" />

          <div className="product">
            <div className="productName">{this.props.name}</div>
            <div className="productUnit">{this.props.unit}</div>
            <div className="productQuantity">Quantity{this.props.count}</div>
          </div>
        </div>
        <div className="productPriceBox">
          <div
            className="productRemove"
            onClick={() => this.props.handleButton(this.props.ordering_number)}
          >
            Remove
          </div>
          <div className="productPrice">A${this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default CardItem;
