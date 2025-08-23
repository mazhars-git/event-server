import express from 'express'
import { EventControllers } from './event.controller'
const router = express.Router()

router.post('/', EventControllers.createEvent)
router.get('/', EventControllers.getAllEvents)
router.delete('/:id', EventControllers.deleteEvent)
router.put('/:id', EventControllers.updateEvent)

export const EventRoutes = router
