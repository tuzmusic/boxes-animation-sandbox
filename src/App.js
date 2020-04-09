import React, { useState } from "react";
import "./appearance.css";
import "./animation.css";

export default function App() {
  const clickBox = i => setters[i](!states[i]);

  const [clicked0, setClicked0] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const states = [clicked0, clicked1, clicked2];
  const setters = [setClicked0, setClicked1, setClicked2];

  function Box({ index }) {
    let className = "box";
    if (states[index]) className += " clicked";

    return (
      <div onClick={() => clickBox(index)} className={className}>
        {index}
      </div>
    );
  }

  const Boxes = [0, 1, 2].map(i => <Box index={i} key={i} />);
  const Buttons = [0, 1, 2].map(i => (
    <button onClick={() => clickBox(i)} key={i}>
      {i}
    </button>
  ));

  return (
    <div className="app">
      <div className="boxes-wrapper">{Boxes}</div>
      <div className="buttons-wrapper">{Buttons}</div>
    </div>
  );
}
