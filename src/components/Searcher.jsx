import { Input } from "antd"

const Searcher = () => {
  return (
    
    <Input.Search 
      placeholder="Busca tu pokemon"
      style={
        {marginBottom: 10}
      } 
    />
  )
}

export default Searcher