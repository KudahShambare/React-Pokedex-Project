import React from "react";

const BestPokemon = (props) => (
  <div>
    <p>The Best Pokemon is the Lamagaia</p>
    <ul>
      {props.abilities.map((ab,index) => (
        <li key={index}>{ab}</li>
      ))}
    </ul>
  </div>
);
export default BestPokemon;