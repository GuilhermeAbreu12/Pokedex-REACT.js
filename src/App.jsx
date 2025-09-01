import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard';
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(' https://pokeapi.co/api/v2/pokemon?limit=9') // Garante que todo carregamento precisa ser concluído para resposta
      const data = await response.json()
    
      const detailedPokemon = await Promise.all(
        data.results.map(async(pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json()
        })
      )

      setPokemons(detailedPokemon)
    };

    fetchPokemons()
  }, []);

  return (
    <>
      <div className='app-container'>
        <h1>Pokedex</h1>
        <div className='pokemon-grid'>
          {pokemons.map(pokemons => (
            <PokemonCard
              key={pokemons.id}
              pokemon={pokemons}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
