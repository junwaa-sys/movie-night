import { useState, useEffect } from 'react'
import * as model from '../models/movies'
import { getMovieDetails, getRandMovie } from '../apis/movies'
import Reviews from './Reviews'

function Main() {
  const [randomMovie, setRandomMovie] = useState<model.Root | null>(null)
  const [movieDetails, setMoiveDetails] = useState<model.MovieDetails | null>(
    null,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function fetchRandomMovie() {
    const randMovieData = await getRandMovie()
    setRandomMovie(randMovieData)
    const movieDetails = await getMovieDetails(randMovieData.results[0].id)
    setMoiveDetails(movieDetails)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchRandomMovie()
  }, [])

  if (isLoading && randomMovie?.results[0] && movieDetails) {
    return (
      <>
        <div className="loading">Loading...</div>
      </>
    )
  } else {
    return (
      <>
        <div className="main">
          <div className="main-container">
            <div className="poster">
              <img src={randomMovie?.results[0].primaryImage.url} alt="" />
            </div>
            <div className="movie-details">
              <h1>Title: {movieDetails?.Title} </h1>
              <h3>Director: {movieDetails?.Director}</h3>
              <h3>Genre: {movieDetails?.Genre} </h3>
              <p>Language: {movieDetails?.Language}</p>
              <article>Plot: {movieDetails?.Plot}</article>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Main
