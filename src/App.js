import { useState } from 'react';
import './App.css';
import AddProduct from './Components/Add_products/AddProduct';
import ProductList from './Components/ProductList/ProductList';
import TotalAmount from './Components/TotalAmount/TotalAmount';

function App() {
  const [productList, setProductList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const onAddProduct = prod => {
    setProductList([...productList,prod])
    setTotalAmount(totalAmount+ +prod.price)
  }

  const onDelete =(id, price) => {
    setTotalAmount(totalAmount - price)
    setProductList(()=> productList.filter(pr => pr.id!=id))

  }

  return (
    <div className="App">
    <AddProduct onAddProduct={onAddProduct}/>
    <ProductList productList={productList} onDelete={onDelete}/> 
    <TotalAmount totalAmount={totalAmount}></TotalAmount>
    </div>
  );
}

export default App;
