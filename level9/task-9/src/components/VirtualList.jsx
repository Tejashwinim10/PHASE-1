import React from "react";
import { FixedSizeList as List } from "react-window";
import "../styles/App.css";

const items = Array.from({ length: 10000 }, (_, i) => `🚀 Item #${i + 1}`);

const Row = ({ index, style }) => (
  <div className="list-item" style={style}>
    {items[index]}
  </div>
);

const VirtualList = () => {
  return (
    <div className="list-wrapper">
      <h1>⚡ Virtual Scroll List</h1>
      <p>Rendering 10,000 items efficiently with <code>react-window</code>.</p>
      <List
        height={600}
        itemCount={items.length}
        itemSize={50}
        width={"100%"}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualList;
