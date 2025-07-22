import { model, Schema } from 'mongoose'
import { Event, TCategory } from './event.interface'

export const Category: TCategory[] = ['Work', 'Personal', 'Other']

const eventSchema = new Schema<Event>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    notes: { type: String },
    category: {
      type: String,
      enum: {
        values: Category,
        message: '{VALUE} is not a valid Event',
      },
    },
  },
  {
    timestamps: true,
  },
)

export const EventModel = model<Event>('Event', eventSchema)
