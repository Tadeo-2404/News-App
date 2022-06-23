import { Fragment } from "react"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <div className="min-h-screen flex flex-col contet-center">
        <main className="flex-1 flex flex-col content-center">
          {children}
        </main>
      </div>
    </Fragment>

  )
}

export default Layout