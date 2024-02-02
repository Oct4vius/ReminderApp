import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-dropdown',
  templateUrl: './Dropdown.component.html',
})
export class DropdownComponent { 

  @Input()
  public items: any;

  public isOpen: boolean = false

  public toggleDropdown = () => {
    this.isOpen = !this.isOpen
  }

}
