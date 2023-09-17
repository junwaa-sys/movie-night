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

export function addMoiveToDB(movieData: model.MovieDetails): Promise<string> {
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
