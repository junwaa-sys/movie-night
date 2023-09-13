import express, { response } from 'express'
import * as models from '../../client/models/movies'
import 'dotenv/config'
import request from 'superagent'

const router = express.Router()
const axios = require('axios')

const options = {
  params: {
    list: 'most_pop_movies',
  },
  headers: {
    'X-RapidAPI-Key': process.env.AXIOS_MOVIE_API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
}

router.get('/get/random', (req, res) => {
  axios
    .get('https://moviesdatabase.p.rapidapi.com/titles/random', options)
    .then((response: any) => {
      res.json(response.data)
    })
    .catch((error: any) => {
      console.log(error)
    })
})

router.get('/get-details/:id', (req, res) => {
  const movieId = req.params.id
  request
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.MOVIE_API_KEY}&i=${movieId}`,
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((error) => {
      console.log(error)
    })
})
export default router
