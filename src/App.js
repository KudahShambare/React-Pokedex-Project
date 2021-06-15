import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
let abilities=["fighting","hunting","distant-vision"];
let date= new Date();
let myDate=date.toLocaleDateString();
const CaughtPokemon = () =>(
    <p>Caught 0 pokemon on {myDate} </p>
);
function App(){
   return  <div>
     <Logo appName="Lamagaia"/>
     <BestPokemon abilities={abilities}/>
     <CaughtPokemon/>
    </div>;
}ReactDOM.render(<App/>,document.getElementById("root"));
export default App;