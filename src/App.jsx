import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // 
import { Col, Spin } from 'antd' // Componente para manejar las columnas
// CSS
import './App.css'
// COMPONENTS
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
// ASSETS
import logo from './statics/logo.svg'
// API
import { getPokemon } from './api'
// ACTIONS
import { getPokemonsWithDetails, setLoading } from './actions'

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon()
      dispatch(getPokemonsWithDetails(pokemonsRes))
      dispatch(setLoading(false))
    }

    fetchPokemons()
  }, [])

  return (
    <div className='App'>
      <Col span={5} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}> {/* Ocupa 8 y se corre 8 espacios */}
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ):(
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  )
}

// // Recibe el estado y retorna un objeto cuyas propiedades seran enviadas a los props del componente conectado a redux
// const mapStateToProps = state => ({
//   pokemons: state.pokemons,
// })

// // Recibe el dispatcher de redux y retornara un objeto que sera mapeado en nuestras propiedades pero con los actios creators que establecimos
// const mapDispatchToProps = dispatch => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// })

export default App
