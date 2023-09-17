import request from 'superagent'
import * as models from '../models/movies'

export function getMovieDetails(movieId: string): Promise<models.MovieDetails> {
  return request
    .get(`api/v1/movie/get-details/${movieId}`)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}

export function getRandMovie(): Promise<models.Root> {
  return request
    .get('api/v1/movie/get/random')
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}

export function getMovieFromDB(movieId: string): Promise<string> {
  return request
    .get(`api/v1/movie/get/movie/${movieId}`)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}

export function getMovieList() {
  return request
    .get(`api/v1/movie/get-movie-list`)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}

export function addMoiveToDB(movieData: models.MovieDetails): Promise<string> {
  return request
    .post('api/v1/movie/add')
    .send(movieData)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}
