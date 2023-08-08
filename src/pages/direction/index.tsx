import Layout from "@/components/layout"
import { FC } from "react"
import { useParams } from "react-router-dom"
import useSWR from "swr"
import "./index.moudule.scss"
const Direction: FC = () => {
  const { index } = useParams()
  const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/${index}`)
  return (
    <>
      <Layout>
        <main className="detail-main">
          <div>
            <img
              className="detail-image"
              loading="lazy"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
            />
            <img
              className="detail-image"
              loading="lazy"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png`}
            />
          </div>
          <h3 className="detail-name">{data && data.name}</h3>
        </main>
      </Layout>
    </>
  )
}

export default Direction
