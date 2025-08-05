/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { EventServices } from './event.service'

// create event

const createEvent = async (req: Request, res: Response) => {
  try {
    const eventData = req.body
    const result = await EventServices.createEventIntoDB(eventData)
    res.status(200).json({
      message: 'Event created successfully',
      success: true,
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      message: err.message || 'Something went wrong',
      status: false,
      error: err,
      stack: err.stack,
    })
  }
}

// get all events

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const result = await EventServices.getAllEventsFromDB()
    res.json(result)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: err.message || 'Something went wrong',
      status: false,
      error: err,
      stack: err.stack,
    })
  }
}

const updateEvent = async () => {}

// delete event

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleted = await EventServices.deleteEventFromDB(id)
    if (!deleted) return res.status(404).json({ error: 'Event not found' })

    res.status(200).json({ message: 'Event deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' })
  }
}

export const EventControllers = {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
}
