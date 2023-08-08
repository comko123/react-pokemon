import { FC } from "react"
import "./index.moudule.scss"
import Layout from "@/components/layout"
import Option from "@/components/home/option"
import List from "@/components/home/list"
const HomePage: FC = () => {
  return (
    <Layout>
      <main className="main">
        <aside className="main-aside">
          <Option />
        </aside>
        <article className="main-list">
          <List />
        </article>
      </main>
    </Layout>
  )
}

export default HomePage
