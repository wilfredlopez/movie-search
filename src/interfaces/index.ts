export type MovieResponse = MovieErrorRes | MovieSuccessRes

type TrueOrFalse = "True" | "False"
const TITLE = "t"
const ID = "i"

export type SearchType = typeof TITLE | typeof ID

export interface MovieSuccessRes {
  Title: string
  Year: number
  Rated?: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer?: string
  Actors: string
  Plot: string
  Language?: string
  Country?: string
  Awards?: string
  Poster: string
  Ratings: [{ Source: string; Value: string }]
  Metascore?: string
  imdbRating: number
  imdbVotes: string
  imdbID: string
  Type: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response: TrueOrFalse
}

interface MovieErrorRes {
  Response: TrueOrFalse
  Error: string
}

const errorResponse: MovieResponse = {
  Response: "False",
  Error: "Something went wrong.",
}

const search: MovieResponse = {
  Title: 'Gabriel "Fluffy" Iglesias: One Show Fits All',
  Year: 2019,
  Rated: "N/A",
  Released: "29 Jan 2019",
  Runtime: "90 min",
  Genre: "Documentary, Comedy",
  Director: "Manny Rodriguez",
  Writer: "N/A",
  Actors: "Gabriel Iglesias",
  Plot:
    'Gabriel "Fluffy" Iglesias discusses his teenage son, encounters with Snoop Dogg and an overzealous fan, and more.',
  Language: "N/A",
  Country: "N/A",
  Awards: "N/A",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYjFlMWU1NWEtZTRkZi00YTBlLThjYzUtZmZiYTUxNDFiYjdkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  Ratings: [{ Source: "Internet Movie Database", Value: "7.2/10" }],
  Metascore: "N/A",
  imdbRating: 7.2,
  imdbVotes: "1,029",
  imdbID: "tt9426212",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "N/A",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
}
