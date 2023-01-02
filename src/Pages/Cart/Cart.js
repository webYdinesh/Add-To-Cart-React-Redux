import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../../Components/CartItem/ItemCard";
import OrderBill from "../../Components/OrderSum/OrderBill";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.ProductsReducer.cartProduct);

  console.log(cartItems);
  return (
    <div className="productCart">
      <div className="left-side">
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <p>{`${cartItems.length} Item`}</p>
        </div>
        <div className="product-nav flex">
          <h4>product-details</h4>
          <div className="quantity-price flex">

          <h4>Quantity</h4>
          <h4>Price</h4>
          </div>
        </div>
        <div className="product-detail-container">
          {cartItems.map((ele) => {
            return <ItemCard key={ele.id} productDetails={ele} />;
          })}
        </div>
      </div>
      <div className="right-side">
<OrderBill />
      </div>
    </div>
  );
};

export default Cart;
