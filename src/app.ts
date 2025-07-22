import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { EventRoutes } from './app/modules/events/event.route'

const app: Application = express()

// parser

app.use(express.json())
app.use(cors())

// application routes

app.use('/events', EventRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
