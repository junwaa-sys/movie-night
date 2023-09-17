import connection from './connection'
import * as models from '../../client/models/movies'

export function getMovieById(
  movieId: string,
  db = connection,
): Promise<models.MovieDetails[]> {
  return db('movies').select().where({ id: movieId })
}

export function getMovie(db = connection): Promise<models.MovieDetails[]> {
  return db('movies').select()
}

export function addMovie(movieData: models.MovieDetails, db = connection) {
  return db('movies')
    .insert({
      id: movieData.imdbID,
      title: movieData.Title,
      director: movieData.Director,
      language: movieData.Language,
      genre: movieData.Genre,
      plot: movieData.Plot,
      poster_url: movieData.Poster,
      actors: movieData.Actors,
      released_date: movieData.Released,
    })
    .returning('id')
}
