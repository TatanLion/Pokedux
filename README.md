# Tech Hawaii

Pokedex creada con React@Vite usando Redux y consultando la API https://pokeapi.co/

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **[Deployment]()** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Realizar un git clone del proyecto_

_Para HTTPS_
```

```

### Instalación 🔧

_Se sugiere la instalación de [Git](https://git-scm.com/) y un editor de código de preferencia, en mi caso uso [VsCode](https://code.visualstudio.com/) para poder manipular y observar el proyecto_

## Construido con 🛠️


* HTML
* CSS
* JS
* Bootstrap [](https://getbootstrap.com/)

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/TatanLion/Platzi-Hawaii) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autores ✒️

* **Jonathan Amaya** - *Ing Sistemas - Desarrollador Web* - [TatanLion](https://github.com/TatanLion)

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.

---
⌨️ con ❤️ por [TatanLion](https://github.com/TatanLion) 😊


# REDUX:

LibrerÍa nos ayuda a manejar de mejor manera el estado de nuestra aplicación. Para usarlos se necesita:

- Dónde almacenar: Store
- Cómo acceder: Mediantes métodos, ejempo: selectores.
- Cómo actualizar: Disapradores, actions ó reducers.

**Consta de tres principios:**

- Única fuente de verdad (store)
- El estado es de solo lectura, no modificarlo directamente sino atraves de actions.
- Los cambios deben realizarse através de funciones puras (reducers)

**Funciones Puras caractesristicas:** 

Valor de entrada cambia si la entrada cambia.

Misma entrada, misma salida.
No tener lógica síncrona


## Ciclo de vida de Redux

- State define UI
- En la UI el usuario dispara una acción
- La acción es mandada al reducer
- El reducer actualiza el store
- El store contiene al state
--volvemos al paso 1

## Diferencias entre Redux y Context

"Cuando un sistema es opaco y no determinista, es dífícil reproducir errores o agregar nuevas caracterí sticas"

**Context API**

- ¿Qué hace? -> Evita hacer 'prop drilling' y podemos pasar las props de componentes padres a hijos de f orma sencilla.
- ¿Cuándo usarlo? -> Cuando usemos datos que no cambien mucho en nuestra aplicación.
- Se puede usar desde la versión 16.3 de React

**Redux vs Context API**

- Depuración -> Redux tiene un depurador que nos permite viajar en el tiempo. Context API es un poco más difícil.
- Bundle size -> Context API ya viene integrado en React, así que es más ligero.
- Middlewares -> Redux es muy sencillo con esto.
- Curva aprendizaje -> Context API es mucho más fácil de entender. Redux es un nuevo paradigma.
- Rendering -> Redux previene renders innecesarios.

## Middlewares

Los middlewares son funciones que permiten manipular los datos antes de que lleguen al redux, como por ejemplo en la ruta

```
export const prefix = store => next => action => {
    const prefixed = action.action.payload.map( pokemon => ({
        ...pokemon,
        name: 'Poke: ' + pokemon.name
    }) )

    const updatedAction = {
        ...action,
        action: {...action.action, payload: prefixed}
    }
    next(updatedAction);
}
```

Vemos una función llamada **prefix** la cual nos permite colocar la palabra **Poke:** antes del nombre del pokemon, este es un ejemplo muy basico, pero vemos como podemos hacer un proceso antes de llegar al Redux

## Redux Thunk

