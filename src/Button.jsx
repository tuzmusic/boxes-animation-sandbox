import React from "react";

const Button = ({ next, prev }) => {
  return (
    <>
      <button onClick={prev}>-</button>
      <button onClick={next}>+</button>
    </>
  );
};

export default Button;
