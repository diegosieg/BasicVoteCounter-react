import React from "react";
import { render } from "react-dom";
import VoteCounter from "./VoteCounter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <VoteCounter />
  </div>
);

render(<App />, document.getElementById("root"));
