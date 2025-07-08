import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/App.css";

const SearchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search"
        defaultValue={searchParams.get("query") || ""}
        onChange={(e) => updateParam("query", e.target.value)}
      />
      <select
        defaultValue={searchParams.get("category") || ""}
        onChange={(e) => updateParam("category", e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Apparel">Apparel</option>
        <option value="Accessories">Accessories</option>
      </select>
      <select
        defaultValue={searchParams.get("price") || ""}
        onChange={(e) => updateParam("price", e.target.value)}
      >
        <option value="">Any Price</option>
        <option value="100">Under $100</option>
        <option value="500">Under $500</option>
      </select>
    </div>
  );
};

export default SearchFilters;
