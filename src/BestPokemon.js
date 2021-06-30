import React from "react";

const BestPokemon =(props,index) =>(
    <div >
   <p>The Best Pokemon is the Lamagaia</p>
   <ul>
{props.abilities.map((ab)=>(
     <li key={index}>{ab}</li>
))}
   </ul>
   </div>
);
export default BestPokemon;