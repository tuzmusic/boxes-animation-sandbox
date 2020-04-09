import React from "react";
import Box from "./BoxContainer";

const Boxes = Array(100)
  .fill("")
  .map((_, i) => <Box index={i} key={i} />);

const Button = ({ next, prev }) => {
  return (
    <>
      <button onClick={next}>{"<"}</button>
      <div className="boxes-wrapper">{Boxes}</div>
      <button onClick={prev}>{">"}</button>
    </>
  );
};

export default Button;
