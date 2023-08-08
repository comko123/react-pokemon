import { rest } from "msw"

export const handlers = [
  //
  rest.get("https://pokeapi.co/api/v2/pokemon", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 60,
        results: [{ name: 1 }, { name: 2 }]
      })
    )
  })
]
