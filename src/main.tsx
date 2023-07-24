import ReactDOM from "react-dom/client"
import "./index.scss"
import { RouterProvider } from "react-router-dom"
import Router from "./router/index"
import { SWRConfig } from "swr"
import axios from "axios"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <SWRConfig
    value={{
      fetcher: async (url) => await (await axios(url)).data
    }}
  >
    <RouterProvider router={Router} />
  </SWRConfig>
)
