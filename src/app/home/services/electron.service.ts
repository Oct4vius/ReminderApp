import { Injectable } from '@angular/core';
import { Reminder } from '../types/home.types';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  private electronAPI = (window as any).electronAPI;

  constructor() {}

  public saveReminder = (reminder: Reminder) => {
    if (!this.electronAPI) return console.warn('Electron API is not avaliable');

    this.electronAPI.sendData(reminder);
  };

  public getReminders = async () => {
    if (!this.electronAPI) return console.warn('Electron API is not avaliable');

    return await this.electronAPI.fetchReminders();
  };
}
