import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div class="row">
        {
            products.map(product => <Product data={product} />)
        }
      </div>
    </div>
  );
};
export default Products;
