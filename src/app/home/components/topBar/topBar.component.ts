import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Reminder } from '../../types/home.types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 } from 'uuid';

@Component({
  selector: 'home-topbar',
  templateUrl: './topBar.component.html',
})
export class TopBarComponent {

  @ViewChild('reminderInput')
  public reminderInput!: ElementRef<HTMLInputElement>;

  @Output()
  public addReminder: EventEmitter<Reminder> = new EventEmitter()

  public faPlus = faPlus

  public saveReminder = ( title: string ) => {

    this.addReminder.emit({
      id: v4(),
      title,
      children: []
    })

    this.reminderInput.nativeElement.value = ''
  }

}
