import React from "react";

const DynamicDiv = ({ bgColor }) => {
  const divStyle = {
    backgroundColor: bgColor,
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "18px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
  };

  return (
    <div style={containerStyle}>
      <div style={divStyle}>Dynamic Div</div>
    </div>
  );
};

export default DynamicDiv;