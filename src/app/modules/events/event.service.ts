import { Event } from './event.interface'
import { EventModel } from './event.model'

// create event into database

const createEventIntoDB = async (event: Event) => {
  const result = await EventModel.create(event)

  return result
}

// get all events from database

const getAllEventsFromDB = async () => {
  const result = await EventModel.find()

  return result
}

const updateEventIntoDB = async () => {}
const deleteEventIntoDB = async () => {}

export const EventServices = {
  createEventIntoDB,
  getAllEventsFromDB,
  updateEventIntoDB,
  deleteEventIntoDB,
}
