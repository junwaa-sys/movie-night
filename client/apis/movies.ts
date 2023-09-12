import request from 'superagent'
import * as model from '../models/movies'

export function getMovie(movieId: string): Promise<model.Movie> {
  return request
    .get(`api/v1/movie/get/${movieId}`)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}
