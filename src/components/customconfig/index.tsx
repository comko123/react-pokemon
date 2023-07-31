import { ReactNode } from "react"
import { SWRConfig } from "swr"
const CustomConfig = ({
  children,
  url,
  value
}: {
  children: ReactNode
  url: string
  value: any
}) => {
  return (
    <SWRConfig value={{ fallback: { [url]: value } }}>{children}</SWRConfig>
  )
}
export default CustomConfig
