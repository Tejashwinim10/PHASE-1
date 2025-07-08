import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

const ProductItem = React.memo(({ data, index, style }) => {
  const product = data[index];
  return (
    <div style={style} className="product-item">
      {product.title}
    </div>
  );
});

const ProductList = () => {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });

  const renderRow = useCallback(
    ({ index, style }) => (
      <ProductItem data={data} index={index} style={style} />
    ),
    [data]
  );

  if (isLoading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="product-list-container">
      <List
        height={500}
        itemCount={data.length}
        itemSize={60}
        width={"100%"}
        className="virtual-list"
      >
        {renderRow}
      </List>
    </div>
  );
};

export default ProductList;
