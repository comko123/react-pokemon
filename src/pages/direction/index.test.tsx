import { render, screen } from "@testing-library/react"
import Direction from "."
import CustomConfig from "@/utils/customconfig"
it("detail 페이지 테스트", async () => {
  render(
    <CustomConfig>
      <Direction />
    </CustomConfig>
  )
  const result = await screen.findAllByRole("img")
  expect(result).toHaveLength(2)
})
