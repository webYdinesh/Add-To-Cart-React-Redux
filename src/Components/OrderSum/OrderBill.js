import React from "react";
import { useSelector } from "react-redux";
import "./OrderBill.css";
const OrderBill = ({ qty }) => {
  const cartProduct = useSelector((state) => state.ProductsReducer.cartProduct);
  const totalsum = cartProduct.reduce((total, product) => {
    return total + product.itemDetail.price;
  }, 0);
  const totalQuantity = cartProduct.reduce((total, qty) => {
    return total + qty.quantity;
  }, 0);
  const grandTotal = totalsum * totalQuantity
  return (
    <div className="right-section">
      <h2>Order Summary</h2>
      <div className="right-nav flex cart-details">
        <h4 className=" itemC"> {`Item : ${cartProduct.length}`}</h4>
        <h4>{`Sub Total : $ ${grandTotal.toFixed(1)}`}</h4>
      </div>
      <h4 className=" shipping">Shipping</h4>
      <select name="shippingOpt" id="shipping-option">
        <option value="normal">Normal Delivery</option>
        <option value="Standard">Standard Delivery</option>
        <option value="Fast">Fast Delivery</option>
      </select>
      <div className="promo-section">
        <h4 className=" shipping">Have PROMO CODE?</h4>
        <input type="text" id="promo" placeholder="Apply Here 😎:" />
        <button className="apply">Apply</button>
      </div>
      <div className="final flex">
        <h4>Total Cost :</h4>
        <h4 id="total">{`$ ${grandTotal.toFixed(1)}`}</h4>
      </div>
      <button className="place-order">Place Order</button>
    </div>
  );
};

export default OrderBill;
