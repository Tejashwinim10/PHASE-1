import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFilters from "./components/SearchFilters";
import ProductList from "./components/ProductList";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Product Search</h1>
        <SearchFilters />
        <ProductList />
      </div>
    </BrowserRouter>
  );
};

export default App;
