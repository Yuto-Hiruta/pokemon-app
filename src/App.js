import { useEffect } from "react";
import './App.css';
import {getAllPokemon} from "/Users/yuto/Downloads/yuto/pokemon-app/src/utils/pokemon";

function App() {
  const initialURL ="https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {

      //retrieve all Pokemon data
      let res = getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPokemonData();
  }, []
  );
  return <div className="App"></div>
}

export default App;
