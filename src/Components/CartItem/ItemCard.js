import React from "react"; 
import {FaPlus,FaMinus} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { getProduct,removeProduct } from "../../Redux/Slices/ProductsSlice";
import './ItemCard.css'
const ItemCard = ({productDetails:{quantity},productDetails:{itemDetail:{title,price,category,image,id}}}) => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state=>state.products)
  return (

    <div className="cart-item flex">
      <div className="cart-item-info flex">
        <div className="item-img">
          <img src={image} alt="images" />
        </div>
        <div className="inner-text flex">
          <h3>{title}</h3>
          <span>{category}</span>
        </div>
      </div>
      <div className="other-info flex">
        <div className="quantity flex">
        <button onClick={()=>dispatch(removeProduct(id))}> <FaMinus fontSize={20} /> </button>
          <input type="text" value={quantity} readOnly />
          <button onClick={()=>dispatch(getProduct(id))}> <FaPlus fontSize={20} /> </button>
        </div>
        <div className="product-price">
          <h4>{`$ ${price}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
