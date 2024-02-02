import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './components/Dropdown/Dropdown.component';



@NgModule({
  declarations: [
    InputComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    InputComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
