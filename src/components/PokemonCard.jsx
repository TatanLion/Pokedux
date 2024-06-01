import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import { useDispatch } from "react-redux"
// COMPONENTS
import StarButton from "./StarButton"
import { setFavorite } from "../actions"

const PokemonCard = ({ name, image, types, id, favorite }) => {

  const dispatch = useDispatch() 

  const typesString = types.map(type => type.type.name).join(', ')

  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }

  return (
    <Card
      title={name} // Titulo de la tarjeta
      cover={<img src={image} alt={name} />} // Puede ser un componente o atributo
      extra={
        <StarButton isFavorite={favorite} onClick={handleFavorite} />
      } // Nos sirve para colocar elementos en la parte superior derecha
    >
      <Meta
        description={typesString}
      />
    </Card>
  )
}

export default PokemonCard