import React from "react"

import "./styles/index.css"
// import "./styles/bootstrap.min.css"
import "./styles/simplex.bootstrap.min.css"

import AppRouter from "./router"

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}

export default App
