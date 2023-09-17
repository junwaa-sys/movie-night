import connection from './connection'
import * as reviewModels from '../../client/models/reviews'

export function getReviews(
  movieId: string,
  db = connection,
): Promise<reviewModels.Reviews[]> {
  return db('reviews').select().where({ id: movieId })
}

export function addReview(
  reviewDetail: reviewModels.NewReview,
  db = connection,
) {
  return db('reviews')
    .insert({
      movie_id: reviewDetail.movie_id,
      user_id: reviewDetail.user_id,
      body: reviewDetail.body,
    })
    .returning('id')
}

export function delReview(reveiwId: number, db = connection) {
  return db('reviews').delete().where({ id: reveiwId }).returning('id')
}
