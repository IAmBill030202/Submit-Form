import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ setProducts, products }) => {
  return (
    <div className="product-container">
      <ul className="todo-list">
        {products.map((product) => (
          <ProductItem
            setProducts={setProducts}
            products={products}
            key={product.id}
            product={product}
            year={product.year}
            name={product.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
