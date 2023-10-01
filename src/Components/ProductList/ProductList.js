import React, { useState } from "react";

const ProductList = ({ productList, onDelete }) => {
  return (
    <ul>
      {productList.map((prod) => (
        <li key={prod.id} id={prod.id}>
          {`${prod.id}  ${prod.price}  ${prod.name}`}
          <button
            onClick={() => {
              onDelete(prod.id, prod.price);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
