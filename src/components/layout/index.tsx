import { ReactNode, useState } from "react"
import { motion } from "framer-motion"
import "./index.moudule.scss"
import { useNavigate } from "react-router-dom"
const Layout = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <header className="header">
        <div className="home-link" onClick={() => navigate("/")}>
          home
        </div>
        <div className="search-box">
          <motion.input
            className="search-input"
            placeholder="search for pokemon name"
            initial={{ scaleX: 0 }}
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
