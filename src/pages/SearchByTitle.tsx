import React, { useState, FormEvent, useRef } from "react"
import { useSearchOneMovie } from "../hooks/useMovie"
import { DisplayMovie } from "../components/movie/DisplayMovie"
import { SearchType } from "../interfaces"

const SearchByTitle: React.FC = () => {
  const [query, setQuery] = useState("")
  const [searchBy, setSearchBy] = useState<SearchType>("t")
  const [searchText, setSearchText] = useState()
  const [movie, loading, error] = useSearchOneMovie(searchBy, searchText)
  const initRef = useRef(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSearchText(query)
    setQuery(() => "")
    initRef.current = true
  }
  return (
    <>
      <div className="container mt-2">
        <div className="container py-2">
          <div className="d-flex">
            <h1 className="display-4" style={{ flex: 1, flexBasis: "auto" }}>
              Search by:
            </h1>
            <div
              className="form-group m-auto"
              style={{ flex: 2, flexBasis: "auto" }}
            >
              <select
                className="form-control bg-secondary text-secondary"
                value={searchBy}
                onChange={e => {
                  const value = e.target.value
                  if (value === "t" || value === "i") {
                    setSearchBy(() => value as SearchType)
                  }
                }}
              >
                <option value="t">Title</option>
                <option value="i">imdbID</option>
              </select>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-4">
            <input
              type="text"
              autoFocus
              className="form-control "
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        {loading && (
          <div className="row">
            <div className="text-center">
              <h2>Loading...</h2>
            </div>
          </div>
        )}
        {initRef.current && !loading && error && (
          <div className="row mt-3">
            <div className="text-center">
              <h2 className="text-center text-danger">Movie Not Found</h2>
              <p>Please try again</p>
            </div>
          </div>
        )}
        <div className="container mt-3">
          {!loading && movie && (
            <DisplayMovie movie={movie} key={movie.imdbID} />
          )}
        </div>
      </div>
    </>
  )
}
export default SearchByTitle
