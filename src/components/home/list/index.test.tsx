import CustomConfig from "@/utils/customconfig"
import { render, screen } from "@testing-library/react"
import List from "."

describe("포켓몬 리스트및 버튼 통합 테스트", () => {
  it("버튼 개수 확인 테스트", async () => {
    render(
      <CustomConfig>
        <List />
      </CustomConfig>
    )

    const count_btn = await screen.findAllByRole("button")

    expect(count_btn).toHaveLength(51)
  })
})
