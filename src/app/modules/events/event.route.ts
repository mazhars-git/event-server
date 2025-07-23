import express from 'express'
import { EventControllers } from './event.controller'
const router = express.Router()

router.post('/', EventControllers.createEvent)
router.get('/', EventControllers.getAllEvents)

export const EventRoutes = router
