import express from 'express'
import { join } from 'node:path'

import movieRoutes from './routes/movie'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/movie', movieRoutes)

export default server
