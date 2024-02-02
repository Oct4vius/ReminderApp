import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-dropdown',
  templateUrl: './Dropdown.component.html',
})
export class DropdownComponent { 

  @Input()
  public items: any;

  @Input()
  public isOpen: boolean = false

  @Output()
  public toggleDropdown: EventEmitter<null> = new EventEmitter() 

  public emitToggle = () => {
    this.toggleDropdown.emit()
  }

}
