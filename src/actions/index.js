import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

// ACTION CREATOR
export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

export const getPokemonsWithDetails = 
    (pokemons = []) => 
    async (dispatch) => {
        const pokemonsDetails = await Promise.all(
            pokemons.map(pokemon => getPokemonDetails(pokemon))
        )
        dispatch(setPokemons(pokemonsDetails))
}

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})