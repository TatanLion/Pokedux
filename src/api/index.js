import axios from 'axios'

export const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.data.results)
}

export const getPokemonDetails = pokemon => {
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch(err => console.log(err))

}