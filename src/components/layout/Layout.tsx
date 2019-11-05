import React from "react"
import { Heather } from "./Heather"

interface Props {}

export const Layout: React.FC<Props> = props => {
  return (
    <>
      <Heather title="MovieX" />
      {props.children}
      <footer className="mt-5" id="app-footer">
        <div>{/* <p className="text-center py-3">By Wilfred Lopez</p> */}</div>
      </footer>
    </>
  )
}
