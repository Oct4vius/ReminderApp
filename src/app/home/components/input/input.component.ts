import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../services/home.service';
import { reminder } from '../../types/home.types';

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

    this.addReminder.emit({title})

    this.reminderInput.nativeElement.value = ''
  }

  public faPlus = faPlus


}
