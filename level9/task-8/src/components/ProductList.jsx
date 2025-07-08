import React from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/App.css";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const category = searchParams.get("category");
  const maxPrice = searchParams.get("price");

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query);
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice = maxPrice ? product.price <= Number(maxPrice) : true;
    return matchesQuery && matchesCategory && matchesPrice;
  });

  return (
    <div className="product-list">
      {filteredProducts.map((p) => (
        <div className="product-card" key={p.id}>
          <h3>{p.name}</h3>
          <p>Category: {p.category}</p>
          <p>Price: ${p.price}</p>
        </div>
      ))}
      {filteredProducts.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default ProductList;
