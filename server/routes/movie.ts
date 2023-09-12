import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/get/:id', (req, res) => {
  request
    .get(
      `http://www.omdbapi.com/?i=tt${req.params.id.padStart(7, '0')}&apikey=${
        process.env.MOVIE_API_KEY
      }`,
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router
