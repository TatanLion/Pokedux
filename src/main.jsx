import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// REDUCER
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
// MIDDLEWARES
import { logger } from './middlewares/index.js'
// REDUX THUNK
import { thunk } from 'redux-thunk'


const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const composeEnhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk, logger)
// )

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger))

const store = createStore(pokemonsReducer, composeEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
