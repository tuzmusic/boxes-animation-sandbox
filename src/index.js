import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import { Provider } from "react-redux";
import boxesSlice from "./boxesSlice";

console.log(boxesSlice);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore({ reducer: boxesSlice })}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
