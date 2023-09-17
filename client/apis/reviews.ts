import request from 'superagent'
import * as models from '../models/reviews'

export function getReviews(movieId: string): Promise<models.Reviews[]> {
  return request
    .get(`/api/v1/reviews/get/${movieId}`)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}

export function addReview(reviewDetail: models.NewReview, token: string) {
  return request
    .post('/api/v1/reviews/add')
    .set('Authorization', `bearer ${token}`)
    .send(reviewDetail)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error)
    })
}
