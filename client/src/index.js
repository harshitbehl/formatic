import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
