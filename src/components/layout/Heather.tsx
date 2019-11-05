import React from "react"
import { Link, NavLink } from "react-router-dom"

interface Props {
  title: string
}

export const Heather: React.FC<Props> = ({ title }) => {
  return (
    <div className="container-fluid bg-primary text-light">
      <div className="container py-2">
        <nav>
          <ul className="nav justify-content-end navbar-dark">
            <li className="nav-item mr-auto">
              <Link to="/" className="nav-item">
                <h1 className="text-light navbar-brand m-auto">{title}</h1>
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="text-light nav-link"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/bytitle"
                className="text-light nav-link"
                activeClassName="active"
                exact
              >
                Advanced Search
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
