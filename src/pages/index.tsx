import React, { useState, FormEvent, useRef } from "react"
import { useSearchAllMovies } from "../hooks/useMovie"
import { DisplayMovie } from "../components/movie/DisplayMovie"

const Home: React.FC = () => {
  const [query, setQuery] = useState("")
  const [searchText, setSearchText] = useState()
  const [movie, loading, error] = useSearchAllMovies(searchText)
  const initRef = useRef(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSearchText(query)
    initRef.current = true
  }
  return (
    <>
      <div className="container mt-2">
        <div className="container py-2">
          <h1 className="display-4">Search</h1>
          <p>*Movies and TV Series</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              autoFocus
              className="form-control"
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
          {!loading &&
            movie.length > 0 &&
            movie.map(m => <DisplayMovie movie={m} key={m.imdbID} />)}
        </div>
      </div>
    </>
  )
}
export default Home
