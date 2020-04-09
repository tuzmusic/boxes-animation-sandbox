import React from "react";

const Box = ({ position, clickBoxAtIndex, index }) => {
  let className = "box "; // + (clicked ? " clicked" : "");

  const click = () => clickBoxAtIndex(index);
  return (
    <div onClick={click} className={className + position}>
      {index}
    </div>
  );
};

export default Box;
