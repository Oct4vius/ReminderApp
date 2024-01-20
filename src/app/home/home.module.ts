import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './components/input/input.component';





@NgModule({
  declarations: [
    CardComponent,
    HomePageComponent,
    InputComponent
  ],
  imports: [
    CommonModule,

    FontAwesomeModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
