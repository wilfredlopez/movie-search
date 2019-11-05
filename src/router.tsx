import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages"
import { Layout } from "./components/layout/Layout"
import SearchByTitle from "./pages/SearchByTitle"

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SearchByTitle} path="/bytitle" exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter
