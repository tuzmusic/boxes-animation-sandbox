import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const clickBox = i => setters[i](!states[i]);

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const states = [clicked1, clicked2, clicked3];
  const setters = [setClicked1, setClicked2, setClicked3];

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
    <button onClick={() => clickBox(i)}>{i}</button>
  ));
  console.log(states);

  return (
    <div className="app">
      <div className="boxes-wrapper">{Boxes}</div>
      <div className="buttons-wrapper">{Buttons}</div>
    </div>
  );
}
