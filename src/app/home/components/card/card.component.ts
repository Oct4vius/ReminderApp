import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  faArrowDown,
  faArrowRight,
  faCheck,
  faClipboard,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Reminder } from '../../types/home.types';
import { HomeService } from '../../services/home.service';
import { v4 } from 'uuid';
import { DropdownItem } from '../../../shared/types/shared.types';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: 0
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})
export class CardComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  @Input()
  public reminder!: Reminder;

  @Input()
  public isChild: boolean = false;

  @Input()
  public isEvenChild: number = 0;

  @Input()
  public cardIndex: number = 0;

  @Output()
  public onDeleteReminder: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDeleteChildReminder: EventEmitter<Reminder> = new EventEmitter();

  public faPlus = faPlus;
  public faTrash = faTrash;
  public faCheck = faCheck;
  public faClipboard = faClipboard;
  public faArrowRight = faArrowRight;
  public faArrowDown = faArrowDown;

  public showChildren: boolean = false;
  public showAddChildInput: boolean = false;

  public dropdownItems: DropdownItem[] = [
    { label: 'Copy', icon: faClipboard, click: () => this.copyToClipboard() },
    {
      label: 'Remove',
      icon: faTrash,
      click: () => (!this.isChild ? this.onDelete() : this.onDeleteChild()),
    },
    {
      label: 'Done',
      icon: faCheck,
      click: () => console.log('reminder completed'),
    },
  ];
  public isDropdownOpen: boolean = false;
  public toggleDropdown = () => {
    this.isDropdownOpen = !this.isDropdownOpen;
  };

  public toggleShowChildren = () => {
    if (this.reminder.children.length === 0) return;

    if (this.showAddChildInput) {
      this.showAddChildInput = false;
    }

    this.showChildren = !this.showChildren;
  };

  public showAddReminderChild = () => {
    if (!this.showAddChildInput) {
      this.showChildren = true;
      this.showAddChildInput = true;
      return;
    }
    this.showAddChildInput = false;
  };

  public onAddChild = (title: string) => {
    this.reminder.children.unshift({
      id: v4(),
      title,
      children: [],
    });

    this.homeService.save();
  };

  public onDelete = (): void => {
    this.onDeleteReminder.emit(this.reminder.id);
  };

  public onDeleteChild = (): void => {
    this.onDeleteChildReminder.emit(this.reminder);
  };

  public handleDeleteChild = (reminder: Reminder): void => {
    this.reminder.children = this.reminder.children.filter(
      (rem) => rem.id !== reminder.id
    );

    if (this.reminder.children.length === 0) {
      this.toggleShowChildren();
    }

    this.homeService.save();
  };

  public copyToClipboard() {
    navigator.clipboard.writeText(this.reminder.title);
    this.isDropdownOpen = false;
  }

  ngOnInit(): void {
    if (!this.reminder) throw Error('It needs a reminder');
  }
}
