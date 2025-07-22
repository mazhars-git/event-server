import express from 'express'
import { EventControllers } from './event.controller'
const router = express.Router()

router.post('/', EventControllers.createEvent)

export const EventRoutes = router
