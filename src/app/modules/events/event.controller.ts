import { Request, Response } from 'express'
import { EventServices } from './event.service'

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

export const EventControllers = {
  createEvent,
}
