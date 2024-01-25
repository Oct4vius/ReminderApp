import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    InputComponent
  ]
})
export class SharedModule { }
