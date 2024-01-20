import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { reminder } from '../../types/home.types';
import { v4 } from 'uuid'

@Component({
  selector: 'home-input',
  templateUrl: './input.component.html',
})
export class InputComponent { 

  @ViewChild('reminderInput')
  public reminderInput!: ElementRef<HTMLInputElement>;

  @Output()
  public addReminder: EventEmitter<reminder> = new EventEmitter()

  public saveReminder = ( title: string ) => {

    this.addReminder.emit({
      id: v4(),
      title
    })

    this.reminderInput.nativeElement.value = ''
  }

  public faPlus = faPlus


}
