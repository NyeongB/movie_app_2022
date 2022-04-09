import React from "react";
import Potato from "./potato";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  const food1 = "kimchi";
  return (
    <div>
      <h1>Hello</h1>
      <Potato></Potato>
      <Food fav={food1} something={true} papa={["hello", 1, 2, 3, 4]}></Food>
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}
export default App;
