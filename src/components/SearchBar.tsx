import { Button, Flex, Input } from "@chakra-ui/react"
import { useState } from "react"

type Props = {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState('')

  const onSubmit = () => {
    onSearch(query)
  }

  return (
    <Flex my='3'>
      <Input onChange={e => setQuery(e.target.value)} />
      <Button onClick={onSubmit} ml='2'>Search</Button>
    </Flex>
    
  )
}

export default SearchBar