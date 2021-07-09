import React, { useState } from "react";

function CaughtPokeman() {
  const [caught, update] = useState([]);
  const [pokemonNameInput,setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function catchPokemon() {
    update(() => {
      // program to generate random strings

    //  const result = Math.random().toString(36).substring(2, 7);

      return caught.concat(handleInputChange);
    });
  }
  let date = new Date();
  let myDate = date.toLocaleDateString();
  return (
    <div>
      <p>
        Caught {caught.length} pokemon on {myDate}{" "}
      </p>
      <ul>
        {caught.map((elem, index) => {
          return <li key={index}>{elem}</li>;
        })}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}> Update </button>
    </div>
  );
}

export default CaughtPokeman;
