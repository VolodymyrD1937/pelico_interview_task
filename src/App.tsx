import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductModel } from "./model/ProductModel";
import { ProductPage } from "./pages/ProductPage";
import { ProductContext } from "./context/context";
import { CartPage } from "./pages/CartPage";
import { AddedProductModel } from "./model/AddedProductModel";

function App() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [addedProducts, setAddedProducts] = useState<AddedProductModel[]>([]);
  const navigate = useNavigate()

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <ProductContext.Provider value={{ addedProducts, setAddedProducts}}>
      <button onClick={() => navigate("/products")}>Go to List</button>
      <button onClick={() => navigate("/cart")}>Go to Cart</button>
    <Routes>
      <Route
        path="/products"
        element={<ProductsPage products={products} />}
      ></Route>
       <Route
        path="/products/:productId"
        element={<ProductPage products={products} />}
      ></Route>
       <Route
        path="/cart"
        element={<CartPage products={products}/>}
      ></Route>
    </Routes>
    </ProductContext.Provider>
  );
}

export default App;
