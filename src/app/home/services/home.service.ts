import { Injectable } from '@angular/core';
import { reminder } from '../types/home.types';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor() {
    if(!localStorage.getItem("reminders")){
      this.reminders = [] 
    }else{
      this.reminders = JSON.parse(localStorage.getItem('reminders')!)
    }
  }

  private reminders!: reminder[];

  get _reminders() {
    return [...this.reminders]
  }

  public deleteReminder = ( id: string ): void => {
    this.reminders = this.reminders.filter( (reminder) => reminder.id !== id )
    this.save()
  }
 
  public saveReminder = ( reminder: reminder ): void => {
    this.reminders.unshift(reminder)
    this.save()
  }

  public save = (): void =>{
    localStorage.setItem('reminders', JSON.stringify(this.reminders))
  }

}
