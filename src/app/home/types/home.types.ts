export type reminder = {
    id: string
    title: string,
    children: reminder[]
    date?: Date
    isCompleted?: boolean
  }