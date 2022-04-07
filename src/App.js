import React from "react";
import Potato from "./potato";

function Tomato() {
  return <h3>I like tomato</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato></Potato>
      <Tomato></Tomato>
    </div>
  );
}
export default App;
