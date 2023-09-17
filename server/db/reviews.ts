import connection from './connection'
import * as models from '../../client/models/reviews'

export function getReviews(
  movieId: string,
  db = connection,
): Promise<models.Reviews[]> {
  return db('reviews').select().where({ id: movieId })
}

export function addReview(
  movieId: string,
  reviewDetail: models.Reviews,
  db = connection,
) {
  return db('reviews')
    .insert({
      movie_id: movieId,
      user_id: reviewDetail.user_id,
      body: reviewDetail,
    })
    .returning('id')
}

export function delReview(reveiwId: number, db = connection) {
  return db('reviews').delete().where({ id: reveiwId }).returning('id')
}
