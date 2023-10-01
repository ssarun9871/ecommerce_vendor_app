import React, { useState } from "react";

const AddProduct = ({onAddProduct}) => {
  const [product, setProduct] = useState({ id: "", price: "", name: "" });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddProduct(product)
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Product Id</label>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, id: e.target.value })}
        />

        <label>Selling Price</label>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <label>Product Name</label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </div>
      <button>Add Product</button>
    </form>
  );
};

export default AddProduct;