import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowDown, faArrowRight, faClipboard, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { reminder } from '../../types/home.types';
import { HomeService } from '../../services/home.service';
import { v4 } from 'uuid';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  constructor(private homeService: HomeService) {}

  @Input()
  public reminder!: reminder;

  @Input()
  public isChild: boolean = false;

  @Input()
  public isEvenChild: number = 0

  @Input()
  public cardIndex: number = 0;

  @Output()
  public onDeleteReminder: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDeleteChildReminder: EventEmitter<reminder> = new EventEmitter();


  public faPlus = faPlus;
  public faTrash = faTrash;
  public faClipboard = faClipboard
  public faArrowRight = faArrowRight
  public faArrowDown = faArrowDown

  public showChildren: boolean = false;
  public showAddChildInput: boolean = false;

  public toggleShowChildren = () => {

    if(this.reminder.children.length === 0) return;

    if(this.showAddChildInput){
      this.showAddChildInput = false
    }

    this.showChildren = !this.showChildren;

  };

  public showAddReminderChild = () => {
    if(!this.showAddChildInput){
      this.showChildren = true
      this.showAddChildInput = true
      return;
    }
    this.showAddChildInput = false
    
  };

  public onAddChild = (title: string) => {
    this.reminder.children.push({
      id: v4(),
      title,
      children: [],
    });

    this.homeService.save()
  };

  public onDelete = (): void => {
    this.onDeleteReminder.emit(this.reminder.id);
  };

  public onDeleteChild = (): void => {
    this.onDeleteChildReminder.emit(this.reminder);
  };

  public handleDeleteChild = (reminder: reminder): void => {

    this.reminder.children = this.reminder.children.filter(
      (rem) => rem.id !== reminder.id
    );

    if(this.reminder.children.length === 0){
      this.toggleShowChildren()
    }

    this.homeService.save()
  };

  ngOnInit(): void {
    if (!this.reminder) throw Error('It needs a reminder');
  }
}
