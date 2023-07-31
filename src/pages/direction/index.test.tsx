import { render, screen } from "@testing-library/react"
import Direction from "."
import CustomConfig from "@/components/customconfig"

// useSWR 모의(mock)
// jest.mock("swr", () => ({
//   __esModule: true,
//   default: jest.fn(() => ({
//     data: {
//       id: 1,
//       title: "Mocked Title",
//       userId: 123
//     },
//     isLoading: false
//   }))
// }))
it("Direction 컴포넌트가 정상적으로 렌더링되는지 테스트", async () => {
  render(
    <CustomConfig
      url={"https://jsonplaceholder.typicode.com/todos/1"}
      value={{
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      }}
    >
      <Direction />
    </CustomConfig>
  )
  const result = await screen.findAllByRole("listitem")
  expect(result).toHaveLength(3)
})
