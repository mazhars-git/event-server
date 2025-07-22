export type TCategory = 'Work' | 'Personal' | 'Other'

export type Event = {
  title: string
  date: string
  time: string
  notes: string
  category: TCategory
}
