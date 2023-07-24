import { Outlet } from "react-router-dom"
export const Solution = (props?: any) => {
  return <> story book {props.text ? props.text : null}</>
}
const App: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
