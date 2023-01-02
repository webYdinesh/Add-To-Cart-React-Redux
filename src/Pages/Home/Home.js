import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchProducts, getProduct } from "../../Redux/Slices/ProductsSlice";
import "./Home.css";
const Home = () => {
  const sliceData = useSelector((state) => state.ProductsReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    dispatch(fetchProducts(data));
  };

  return (
    <>
      <div className="product-container">
        {sliceData.map(({ image, description, id, price, title }) => (
          <ProductCard
            key={id}
            productImage={image}
            name={title}
            des={description}
            price={price}
            AddHandler={() => {
              dispatch(getProduct(id))
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
