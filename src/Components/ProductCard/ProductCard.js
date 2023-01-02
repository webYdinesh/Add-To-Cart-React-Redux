import React from "react";
import './ProductCard.css'
const ProductCard = ({productImage,name,des,price,rating,AddHandler}) => {
  return (
    <div className="product-card flex">
      <div className="product-image ">
        <img src={productImage} alt="dgd" />
      </div>
      <div className="product-info flex">
        <h3>{name}</h3>
        <p>{des}</p>

        <div className="price">
            <h4>{`Price : $ ${price}`}</h4>
        </div>
        <div className="add-btn">
            <button onClick={AddHandler}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
