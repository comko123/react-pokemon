import ReactDOM from "react-dom/client"
import "./index.scss"
import { RouterProvider } from "react-router-dom"
import Router from "@/router/index"
import CustomConfig from "@/utils/customconfig"
import { worker } from "./mocks/browser"

if (process.env.NODE_ENV === "development") worker.start()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CustomConfig>
    <RouterProvider router={Router} />
  </CustomConfig>
)
