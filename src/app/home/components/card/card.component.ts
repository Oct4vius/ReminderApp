import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { reminder } from '../../types/home.types';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input()
  public reminder!: reminder; 

  @Output()
  public onDeleteReminder: EventEmitter<string> = new EventEmitter()

  public faPlus = faPlus
  public faTrash = faTrash

  public onDelete = () => {
    this.onDeleteReminder.emit(this.reminder.id)
  }

  ngOnInit(): void {
    if(!this.reminder) throw Error('It needs a reminder')
  }

}
