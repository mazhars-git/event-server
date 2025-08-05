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

const updateEventIntoDB = async (id, data) => {
  const result = await EventModel.findByIdAndUpdate(id, data, { new: true })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteEventFromDB = async ({ id }: any) => {
  const result = await EventModel.findByIdAndDelete(id)
  return result
}

export const EventServices = {
  createEventIntoDB,
  getAllEventsFromDB,
  updateEventIntoDB,
  deleteEventFromDB,
}
