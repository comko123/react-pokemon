import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import HomePage from "@home"
import Direction from "@direction"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage />, children: [{ path: "/page", element: <HomePage /> }] },
      { path: "/detail/:index", element: <Direction /> }
    ]
  }
])
export default Router
