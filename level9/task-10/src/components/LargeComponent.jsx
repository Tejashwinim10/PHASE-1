import React from "react";

const LargeComponent = () => {
  return (
    <div>
      <h2>This is a lazily loaded large component</h2>
    </div>
  );
};

export default React.memo(LargeComponent);
