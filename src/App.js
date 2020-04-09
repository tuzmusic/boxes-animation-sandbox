import React from "react";
import Box from "./BoxContainer";
import Button from "./ButtonContainer";
import "./appearance.css";
import "./animation.css";
import "./buttons.css";
export default function App() {
  const Boxes = Array(100)
    .fill("")
    .map((_, i) => <Box index={i} key={i} />);
  const Buttons = [0].map(i => <Button index={i} key={i} />);

  return (
    <div className="app">
      {/* <div className="boxes-wrapper">{Boxes}</div> */}
      <div className="buttons-wrapper">{Buttons}</div>
    </div>
  );
}
