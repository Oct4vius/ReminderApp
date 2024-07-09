import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Reminder } from '../../types/home.types';
import { ElectronService } from '../../services/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent implements OnInit {

  private homeService = inject(HomeService)
  private electronService = inject(ElectronService)

  get reminders(): Reminder[]{
    return [...this.homeService._reminders ]
  }

  public deleteReminder = (title: string) => {
    this.homeService.deleteReminder(title)
  }

  public deleteChildReminder = ( reminder: Reminder ) => {
    // Se elemina solo porque al hacer el filtro desde el hijo automaticamente se actualiza aqui en el padre pero no se guarda en el local storage
    console.log(reminder)
  }

  public addReminder = (reminder: Reminder) => {
    this.homeService.saveReminder(reminder)
  }

  public ver() {
    console.log(this.homeService._reminders)
  }

  ngOnInit(): void {


  }

}
