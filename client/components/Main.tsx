import { useState, useEffect } from 'react'
import * as model from '../models/movies'
import {
  addMoiveToDB,
  getMovieDetails,
  getMovieFromDB,
  getRandMovie,
} from '../apis/movies'
import * as api from '../apis/reviews'
import * as models from '../models/reviews'
import { useAuth0 } from '@auth0/auth0-react'

function Main() {
  const [randomMovie, setRandomMovie] = useState<model.Root | null>(null)
  const [movieDetails, setMoiveDetails] = useState<model.MovieDetails | null>(
    null,
  )
  const [reviews, setReviews] = useState<models.Reviews[] | null>(null)
  const [newReview, setNewReview] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { getAccessTokenSilently } = useAuth0()

  async function fetchRandomMovie() {
    const randMovieData = await getRandMovie()
    setRandomMovie(randMovieData)
    const movieDetails = await getMovieDetails(randMovieData.results[0].id)
    const moiveInDB = await getMovieFromDB(randMovieData.results[0].id)
    setMoiveDetails(movieDetails)
    fetchReviews(randMovieData.results[0].id)
    if (moiveInDB.length == 0) {
      const addedMovie = await addMoiveToDB(movieDetails)
    }
    setIsLoading(false)
  }

  async function fetchReviews(moiveId: string) {
    const reviewList = await api.getReviews(moiveId)
    setReviews(reviewList)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const reviewBody = e.target.value
    setNewReview(reviewBody)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const accessToken = await getAccessTokenSilently()
    const reviewToAdd: models.NewReview = {
      movie_id: randomMovie?.results[0].id,
      body: newReview,
    }
    const newReviewAdded = await api.addReview(reviewToAdd, accessToken)
    console.log(newReviewAdded)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchRandomMovie()
  }, [])

  const reviews_display = reviews?.map((review) => {
    return (
      <>
        <ul>
          <li key={review.id}>
            <div className="review-body">{review.body}</div>
            <div className="review-user">{review.user_id}</div>
            <div className="review-user">{review.user_id}</div>
          </li>
        </ul>
      </>
    )
  })

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
          <div className="review-container">
            <div className="review">{reviews_display}</div>
            <div className="review-input">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="review-body"
                  onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Main
