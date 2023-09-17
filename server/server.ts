import express from 'express'
import { join, resolve } from 'node:path'


import movieRoutes from './routes/movie'
import reviewRoutes from './routes/reviews'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/movie', movieRoutes)
server.use('/api/v1/reviews', reviewRoutes)

server.get('*', (req, res) => {
  res.sendFile(resolve('server/public/index.html'))
})

export default server
