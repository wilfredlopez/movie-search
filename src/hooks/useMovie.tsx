import { useState, useEffect } from "react"
import config from "../config"
import { MovieSuccessRes, SearchType } from "../interfaces"

export const useSearchOneMovie = (
  searchType: SearchType,
  query?: string,
): [MovieSuccessRes | null, boolean, boolean] => {
  const [data, setData] = useState<MovieSuccessRes | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    if (query) {
      setLoading(true)
      fetch(
        `https://www.omdbapi.com/?${searchType}=${query}&apikey=${config.API_KEY}`,
      )
        .then(res => {
          return res.json()
        })
        .then(data => {
          seterror(false)
          // console.log(data)
          if (data.Response === "False") {
            setLoading(false)
            seterror(true)
            setData(null)
            return
          } else {
            setData(data)
            setLoading(false)
          }
        })
        .catch(e => {
          console.warn(e)
          seterror(true)
          setData(null)
        })
    }
  }, [query, searchType])
  return [data, loading, error]
}

export const useSearchAllMovies = (
  query?: string,
): [MovieSuccessRes[], boolean, boolean] => {
  const [data, setData] = useState<MovieSuccessRes[]>([])
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    if (query) {
      setLoading(true)
      fetch(`https://www.omdbapi.com/?s=${query}&apikey=${config.API_KEY}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          seterror(false)
          // console.log(data)
          if (data.Response === "False") {
            setLoading(false)
            seterror(true)
            setData([])
            return
          } else {
            setData(data.Search)
            setLoading(false)
          }
        })
        .catch(e => {
          console.warn(e)
          seterror(true)
          setData([])
        })
    }
  }, [query])
  return [data, loading, error]
}
