import React from "react";

const ProductItem = ({ name, year, product, products, setProducts }) => {
  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id !== product.id));
  };

  return (
    <div className="product">
      <ul className="product-item">
        <li className="list-group-item">{product.id}</li>
        <li className="list-group-item">{name}</li>
        <li className="list-group-item">{year}</li>
      </ul>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ProductItem;
