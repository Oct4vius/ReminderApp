export type Reminder = {
  id: string;
  title: string;
  children: Reminder[];
  date?: Date;
  isCompleted?: boolean;
};
