import { Component, inject } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { reminder } from '../../types/home.types';
import { MongoDBService } from '../../services/mongo.service';

@Component({
  selector: 'app-home',
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent{ 


  public mongoService = inject( MongoDBService )
  constructor (private homeService: HomeService) { }

  get reminders(): reminder[]{
    return [...this.homeService._reminders ]
  }

  public deleteReminder = (title: string) => {
    this.homeService.deleteReminder(title)
  }

  public deleteChildReminder = ( reminder: reminder ) => {
    // Se elemina solo porque al hacer el filtro desde el hijo automaticamente se actualiza aqui en el padre pero no se guarda en el local storage
    console.log(reminder)
  }

  public addReminder = (reminder: reminder) => {
    this.homeService.saveReminder(reminder)
  }

  public ver() {
    console.log(this.homeService._reminders)
  }


}
