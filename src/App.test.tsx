import { render, screen } from "@testing-library/react"
import App from "./App"
test("set up test",()=>{
    render(<App/>)
    const text = screen.getByRole("button")
    expect(text).toBeInTheDocument()
})