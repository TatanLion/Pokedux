// COMPONENTS
import PokemonCard from './PokemonCard'


const PokemonList = ({ pokemons }) => {

    console.log(pokemons);

  return (
    <div className='PokemonList'>
        {pokemons.map(pokemon => (
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                types={pokemon.types}
                id={pokemon.id}
                favorite={pokemon.favorite}
            />
        ))}
    </div>
  )
}

// Si no tenemos información retornamos unas props por default
PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList