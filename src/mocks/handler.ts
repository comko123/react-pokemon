import { rest } from "msw"

export const handlers = [
  //
  rest.get("https://jsonplaceholder.typicode.com/todos", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "delectus 1",
          completed: false
        },
        {
          userId: 2,
          id: 2,
          title: "delectus 2",
          completed: false
        },
        {
          userId: 3,
          id: 3,
          title: "delectus 3",
          completed: false
        }
      ])
    )
  })
]
