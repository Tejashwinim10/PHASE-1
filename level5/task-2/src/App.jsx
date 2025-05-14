import { useState } from "react";
import ProductList from "./components/ProductList";
import CartIcon from "./components/CartIcon";
import products from "./data/products";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <CartIcon cartCount={cart.length} />
      <h1 className="heading">Our Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
