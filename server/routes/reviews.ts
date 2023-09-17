import express from 'express'
import * as db from '../db/reviews'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

router.get('/get/:movieId', (req, res) => {
  const movieId = req.params.movieId
  db.getReviews(movieId)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.post('/add', checkJwt, async (req: JwtRequest, res) => {
  const userId = req.auth?.sub
  const reviewDetail = { ...req.body, user_id: userId }
  try {
    const addedReview = await db.addReview(reviewDetail)
    res.json(addedReview)
  } catch (error) {
    console.log(error)
  }
})

export default router
