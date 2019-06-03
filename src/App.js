import React, { useState, useContext } from "react";
import Context from "./context";

const App = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(Context);
  //onsubmit we will send it to global state
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "INPUT_TERM", payload: text });
    setText("");
  };

  return (
    <div className="App">
      <h1>Type Something Below</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setText(e.target.value)}
          className="input"
          value={text}
          placeholder="type Something"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
