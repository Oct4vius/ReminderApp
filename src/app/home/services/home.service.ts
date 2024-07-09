import { inject, Injectable } from '@angular/core';
import { Reminder } from '../types/home.types';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private electronService = inject(ElectronService);

  async print() {
    console.log(await this.electronService.getReminders());
  }

  constructor() {
    if (!localStorage.getItem('reminders')) {
      this.reminders = [];
    } else {
      this.reminders = JSON.parse(localStorage.getItem('reminders')!);
    }
  }

  private reminders!: Reminder[];

  get _reminders() {
    return [...this.reminders];
  }

  public deleteReminder = (id: string): void => {
    this.reminders = this.reminders.filter((reminder) => reminder.id !== id);
    this.save();
  };

  public saveReminder = (reminder: Reminder): void => {
    this.reminders.unshift(reminder);
    this.save();
  };

  public save = (): void => {
    localStorage.setItem('reminders', JSON.stringify(this.reminders));
  };
}
