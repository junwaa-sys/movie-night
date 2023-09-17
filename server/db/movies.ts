import connection from './connection'
import * as models from '../../client/models/movies'

export function getMovie(
  movieId: string,
  db = connection,
): Promise<models.MovieDetails[]> {
  return db('movies').select().where({ id: movieId })
}

export function addMovie(
  movieId: string,
  movieData: models.MovieDetails,
  db = connection,
) {
  return db('movies')
    .insert({
      id: movieData.id,
      title: movieData.title,
      director: movieData.director,
      language: movieData.language,
      genre: movieData.genre,
      plot: movieData.plot,
      poster_url: movieData.poster_url,
      actors: movieData.actors,
      released_date: movieData.released_date,
    })
    .returning('id')
}