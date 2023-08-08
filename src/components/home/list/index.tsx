import { FC } from "react"
import useSWR from "swr"
import "./index.moudule.scss"
import { useNavigate, useSearchParams } from "react-router-dom"
const List: FC = () => {
  const [searchParams, _setSearchParams] = useSearchParams()
  const { data } = useSWR<any>(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      searchParams ? searchParams.get("number") : 0
    }&limit=20`
  )
  const navigate = useNavigate()
  return (
    <>
      {data &&
        data.results.map((item: any, index: number) => {
          return (
            <div
              key={item.name}
              className="pokemon-contanier"
              onClick={() => navigate(`detail/${index + 1 + Number(searchParams.get("number"))}`)}
            >
              <img
                loading="lazy"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1 + Number(searchParams.get("number"))
                }.png`}
              />
              <span className="pokemon-name">{item.name}</span>
            </div>
          )
        })}
      <footer className="pokemon-btn-list">
        {data &&
          Array(100)
            .fill(0)
            .map((_, index) => {
              if (!index || !((index + 1) % 2))
                return (
                  <button
                    className="pokemon-btn"
                    key={index}
                    style={
                      !(Number(searchParams.get("number")) === (index + 1) * 10)
                        ? { backgroundColor: "rgb(95, 95, 253)" }
                        : { backgroundColor: "rgb(202, 202, 248)" }
                    }
                    onClick={() => navigate(`/page?number=${!index ? index : (index + 1) * 10}`)}
                  >
                    {!index ? index : index + 1}
                  </button>
                )
            })}
      </footer>
    </>
  )
}
export default List
