import React from "react"
import { MovieSuccessRes } from "../../interfaces"

interface Props {
  movie: MovieSuccessRes
}

export const DisplayMovie: React.FC<Props> = ({ movie }) => {
  return (
    <section className="movie-section">
      <div className="row justify-content-between mt-2 movie-display-one">
        <div className="mr-2 pt-1">
          <h2>Title: {movie.Title}</h2>
          <p>Genre: {movie.Genre}</p>
          <p>Year: {movie.Year}</p>
          <p>Type: {movie.Type}</p>

          {movie.Awards && movie.Awards !== "N/A" && (
            <p>Awards:{movie.Awards}</p>
          )}
          <p>Coutry: {movie.Country}</p>
          <p>Language: {movie.Language}</p>
          {movie.Metascore && movie.Metascore !== "N/A" && (
            <p>Meta: {movie.Metascore}</p>
          )}
          {movie.Rated && <p>Rated: {movie.Rated}</p>}
          {movie.Ratings && (
            <section className="mb-2">
              <p>Ratings:</p>
              {movie.Ratings.map(r => (
                <ul className="list-group" key={r.Value}>
                  <li
                    className="list-group-item mb-1"
                    style={{
                      background: "inherit",
                    }}
                  >
                    {r.Value}
                  </li>
                </ul>
              ))}
            </section>
          )}
          {movie.Released && movie.Released !== "N/A" && (
            <p>Released: {movie.Released}</p>
          )}
          {movie.Website && movie.Website !== "N/A" && (
            <p>Website: {movie.Website}</p>
          )}

          <p>IMDB ID: {movie.imdbID}</p>
          <p>IMDB Rating:{movie.imdbRating}</p>
          <p>IMDB Votes:{movie.imdbVotes}</p>
        </div>
        {movie.Poster && movie.Poster !== "N/A" && (
          <img
            src={movie.Poster}
            className="image-fluid"
            alt={movie.Title}
            style={{
              width: "100%",
              maxWidth: "390px",
              height: "100%",
            }}
          />
        )}
      </div>
      <div className="row mb-3 pt-2 movie-display-one">
        {movie.Actors && <p>Actors: {movie.Actors}</p>}
        {movie.Director && movie.Director !== "N/A" && (
          <p>Director: {movie.Director}</p>
        )}
        {movie.Writer && movie.Writer !== "N/A" && (
          <p>Writer: {movie.Writer}</p>
        )}
        {movie.Plot && movie.Plot !== "N/A" && <p>Plot: {movie.Plot}</p>}
      </div>
      <hr />
    </section>
  )
}
