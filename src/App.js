import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";

let abilities = ["fighting", "hunting", "distant-vision"];
let date = new Date();
let myDate = date.toLocaleDateString();

const CaughtPokemon = () => <p>Caught 0 pokemon on {myDate} </p>;

function logWhenClicked() {
  console.log("event added");
}
function App() {
  return (
    <div>
      <Logo appName="Lamagaia" event={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </div>
  );
}
export default App;
