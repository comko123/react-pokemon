import { render, screen } from "@testing-library/react"
import Direction from "."
import CustomConfig from "@/utils/customconfig"

it("Direction 컴포넌트가 정상적으로 렌더링되는지 테스트", async () => {
  render(
    <CustomConfig>
      <Direction />
    </CustomConfig>
  )
  const result = await screen.findAllByRole("listitem")
  expect(result).toHaveLength(3)
})
