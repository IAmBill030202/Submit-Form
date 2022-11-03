import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import { useState } from "react";

function MainComponent() {
  const [inputName, setInputName] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <div className="product-list">
      <header>
        <h1>Product List</h1>
      </header>
      <ProductForm
        inputName={inputName}
        setInputName={setInputName}
        inputYear={inputYear}
        setInputYear={setInputYear}
        setProducts={setProducts}
        products={products}
      />
      <ProductList setProducts={setProducts} products={products} />
    </div>
  );
}

export default MainComponent;
