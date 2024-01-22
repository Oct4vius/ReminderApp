import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { reminder } from '../../types/home.types';
import { HomeService } from '../../services/home.service';
import { v4 } from 'uuid';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  constructor( private homeService: HomeService ) {}

  @Input()
  public reminder!: reminder; 

  @Input()
  public cardIndex: number = 0;

  @Output()
  public onDeleteReminder: EventEmitter<string> = new EventEmitter()

  public faPlus = faPlus
  public faTrash = faTrash

  public showChildren: boolean = false

  public showReminderChildren = () => {
    this.showChildren = true
  }

  public onAddChild = ( title: string ) => {
    this.homeService.saveChildReminder(this.cardIndex, {
      id: v4(),
      title,
      children: []
    })
  }

  public onDelete = () => {
    this.onDeleteReminder.emit(this.reminder.id)
  }

  ngOnInit(): void {
    if(!this.reminder) throw Error('It needs a reminder')
  }

}
