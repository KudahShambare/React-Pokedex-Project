import React, { useState } from "react";

function PokemonCity() {
    const [city, setCity] = useState("");

    function upateCity(event) {
        console.log(event.target.value);
        setCity(event.target.value);
    }

  return (
      <div>
          <input type="text" value={city} onChange={ upateCity}/>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
