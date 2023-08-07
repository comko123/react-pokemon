import { ReactNode, useState } from "react"
import { motion } from "framer-motion"
import "./index.moudule.scss"
const Layout = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(false)
  return (
    <>
      <header className="header">
        <div className="home-link">home</div>
        <div className="search-box">
          <motion.input
            className="search-input"
            placeholder="search for pokemon name"
            animate={{
              scaleX: state ? 1 : 0,
              transformOrigin: "right center"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="search-icon"
            onClick={() => setState((state) => !state)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </motion.svg>
        </div>
      </header>
      <section className="layout-section">{children}</section>
    </>
  )
}
export default Layout
