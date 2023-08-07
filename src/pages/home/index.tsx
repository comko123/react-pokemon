import { FC } from "react"
import "./index.moudule.scss"
import useSWR from "swr"
import Layout from "@/components/layout"
import Option from "@/components/home/option"
const HomePage: FC = () => {
  const { data } = useSWR<any>("https://pokeapi.co/api/v2/pokemon")
  console.log(data.results)
  return (
    <Layout>
      <main className="main">
        <aside className="main-aside">
          <Option />
        </aside>
        <article className="main-list">
          {data.results.map((item: any, index: number) => {
            return (
              <div key={item.name} className="pokemon-contanier">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                />
                <span>{item.name}</span>
              </div>
            )
          })}
        </article>
      </main>
    </Layout>
  )
}

export default HomePage
