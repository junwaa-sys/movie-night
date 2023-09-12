import { useState, useEffect } from 'react'
import * as model from '../models/movies'
import request from 'superagent'
import { getMovie } from '../apis/movies'

function Main() {
  const [movie, setMovie] = useState<model.Movie | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  function getRandomId(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
  const randomId = getRandomId(1, 10000000).toString().padStart(7, '0')

  async function fetchMovie(randId: string) {
    console.log()
    while (movie?.Response == 'False' || movie?.Response == undefined) {
      const movieData = await getMovie(randId)
      setMovie(movieData)
    }
  }
  useEffect(() => {
    setIsLoading(true)
    fetchMovie(randomId)
    setIsLoading(false)
  }, [])

  return (
    <div className="main">
      {isLoading ? <div>Loading ...</div> : <pre>{JSON.stringify(movie)}</pre>}
    </div>
  )
}

export default Main
