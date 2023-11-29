import express from 'express'
import 'dotenv/config'
import request from 'superagent'
import * as db from '../db/movies'

const router = express.Router()
const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
  headers: {
    'X-RapidAPI-Key': process.env.AXIOS_MOVIE_API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
}

router.get('/get/random', async (req, res) => {
  try {
    const response = await axios.request(options)
    console.log(response)
    res.json(response.body)
  } catch (error) {
    console.log(error)
  }
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

router.get('/get/movie/:id', async (req, res) => {
  const movieId = req.params.id
  try {
    const movie = await db.getMovieById(movieId)
    res.json(movie)
  } catch (error) {
    console.log(error)
  }
})

router.get('/get-movie-list', async (req, res) => {
  try {
    const movieList = await db.getMovie()
    res.json(movieList)
  } catch (error) {
    console.log(error)
  }
})

router.post('/add', async (req, res) => {
  const details = req.body
  try {
    const addedMovie = await db.addMovie(details)
    res.json(addedMovie)
  } catch (error) {
    console.log(error)
  }
})
export default router
