import axios from "axios"
import { ReactNode } from "react"
import { SWRConfig } from "swr"
const CustomConfig = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig value={{ fetcher: async (url) => await (await axios(url)).data }}>
      {children}
    </SWRConfig>
  )
}
export default CustomConfig

//대체 방안
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
