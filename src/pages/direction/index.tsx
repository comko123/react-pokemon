import React from "react"
import useSWR from "swr"

const Direction: React.FC = () => {
  const { isLoading, data, error } = useSWR("https://jsonplaceholder.typicode.com/todos")

  if (error) {
    return <div>Error while fetching data</div>
  }

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {data.map((item: any) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Direction
