import ReactDOM from "react-dom/client"
import "./index.scss"
import { RouterProvider } from "react-router-dom"
import Router from "@/router/index"
import CustomConfig from "@/utils/customconfig"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <CustomConfig>
    <RouterProvider router={Router} />
  </CustomConfig>
)
