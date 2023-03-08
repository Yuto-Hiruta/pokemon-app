import { useEffect, useState } from "react";
import './App.css';
import Card from "./components/Card/Card" 
import {getAllPokemon, getPokemon} from "./utils/pokemon.js";


function App() {
  const initialURL ="https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {

      //retrieve all Pokemon data
      let res = await getAllPokemon(initialURL);
      //get each pokemon's each data
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData =  await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
      setPokemonData(_pokemonData);
  };
  return (

   <div className="App">
    {loading ? (
    <h1>Loading....</h1>
    ) : (
      <>
        <div className = "pokemonCardContainer">
        {pokemonData.map((pokemon, i) => {
          return <Card key = {i} pokemon = {pokemon}/>
          })}
        </div>   
      </>
    )}
  </div>
  );
}

export default App;
