import { useState, useEffect } from 'react'
import * as models from '../models/movies'
import * as api from '../apis/movies'
import { search } from 'superagent'

function MoiveList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchText, setSearchText] = useState<string>('')
  const [movieList, setMovieList] = useState<models.MovieDetails[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function fetchMovieList() {
    const movies = await api.getMovieList()
    setMovieList(movies)
  }

  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchMovieList()
    setIsLoading(false)
  }, [])

  const moviesWithSearchString = movieList?.map((data: models.MovieDetails) => {
    return {
      ...data,
      searchString:
        data.title + data.actors + data.genre + data.director + data.language,
    }
  })

  const moviesAfterSearch = moviesWithSearchString?.filter((data) => {
    if (
      searchText == '' ||
      data.searchString.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return data
    } else {
      return null
    }
  })

  const tableRow = moviesAfterSearch?.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.director}</td>
        <td>{data.actors}</td>
        <td>{data.genre}</td>
        <td>{data.language}</td>
        <td>{data.released_date}</td>
      </tr>
    )
  })

  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="table-search">
            <label htmlFor="searchText">Search: </label>
            <input
              type="text"
              id="searchText"
              placeholder="enter text to search"
              onChange={handleSearchTextChange}
            ></input>
          </div>
          <div className="movie-table">
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>TITLE</td>
                  <td>DIRECTOR</td>
                  <td>ACTORS</td>
                  <td>GENRE</td>
                  <td>LANGUAGE</td>
                  <td>RELEASED DATE</td>
                </tr>
              </thead>
              <tbody>{tableRow}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoiveList
