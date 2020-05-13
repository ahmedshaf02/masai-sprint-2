import React from "react";
import "./styles.css";
import Recipe from "./Recipe";
// import FullRecipe from "./FullRecipe";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1 style={{ color: "#B2F3AF", fontFamily:"italic" }}>React food recipe app</h1>
        <Recipe />
      </div>
    </div>
  );
}
