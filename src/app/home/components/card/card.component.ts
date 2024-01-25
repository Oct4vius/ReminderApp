import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowRight, faClipboard, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { reminder } from '../../types/home.types';
import { HomeService } from '../../services/home.service';
import { v4 } from 'uuid';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  @Input()
  public reminder!: reminder;

  @Input()
  public isChild: boolean = false;

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

  public showChildren: boolean = false;
  public showAddChildInput: boolean = false;

  public toggleShowChildren = () => {
    this.showChildren = !this.showChildren;

    if(this.showAddChildInput) this.showAddChildInput = false
  };

  public showAddReminderChild = () => {
    if(!this.showAddChildInput){
      this.showChildren = true
      this.showAddChildInput = true
      return;
    }

    this.showChildren = !this.showChildren;

    this.showAddChildInput = false
    
  };

  public onAddChild = (title: string) => {
    this.reminder.children?.push({
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
    if (!this.reminder.children) return;

    this.reminder.children = this.reminder.children.filter(
      (rem) => rem.id !== reminder.id
    );

    this.homeService.save()
  };

  ngOnInit(): void {
    if (!this.reminder) throw Error('It needs a reminder');
  }
}
