import { render, screen } from "@testing-library/react"
import HomePage from "."
test("set up test", () => {
  render(<HomePage />)
  const text = screen.getByRole("button")
  expect(text).toBeInTheDocument()
})
