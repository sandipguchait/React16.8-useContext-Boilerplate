import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

import App from "./App";
import Context from "./context";
import reducer from "./reducer";

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("I am From Global State", { state });

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Route exact path="/" component={App} />
      </Context.Provider>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
