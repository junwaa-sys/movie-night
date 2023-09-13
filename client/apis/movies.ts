import request from 'superagent'
import * as model from '../models/movies'

export function getMovieDetails(movieId: string): Promise<model.MovieDetails> {
  return request
    .get(`api/v1/movie/get-details/${movieId}`)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}

export function getRandMovie(): Promise<model.Root> {
  return request
    .get('api/v1/movie/get/random')
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}
