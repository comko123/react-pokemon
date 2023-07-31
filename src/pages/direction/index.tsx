import React from "react"
import useSWR from "swr"

const Direction: React.FC = () => {
  const { isLoading, data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1"
  )

  if (error) {
    return <div>Error while fetching data</div>
  }

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          <li>{data.id} / </li>
          <li>{data.title} /</li>
          <li>{data.userId} /</li>
        </ul>
      )}
    </>
  )
}

export default Direction
