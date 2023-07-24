import React from "react"
import useSWR from "swr"

const Direction: React.FC = () => {
  const { isLoading, data } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  )
  console.log(isLoading, data)
  //swr 동작 여부 확인 test
  return <div>test</div>
}

export default Direction
