import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input()
  public title!: string; 

  @Output()
  public onDeleteReminder: EventEmitter<string> = new EventEmitter()

  public faPlus = faPlus
  public faTrash = faTrash

  public onDelete = () => {
    this.onDeleteReminder.emit(this.title)
  }

  ngOnInit(): void {
    if(!this.title) throw Error('It needs a title')
  }

}
