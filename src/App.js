import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokeman from "./CaughtPokeman";
import PokemonMoves from "./PokemonMoves";
import PokemonMoveSelector from "./PokemonMoveSelector";
import PokemonCity from "./PokemonCity";

let abilities = ["fighting", "hunting", "distant-vision"];

function logWhenClicked() {
  console.log("event added");
}
function App() {
  return (
    <div>
      <Logo appName="Lamagaia" event={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokeman />
      <PokemonMoves />
      <PokemonMoveSelector />
      <PokemonCity/>
    </div>
  );
}
export default App;
