import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { CardComponent } from './components/card/card.component';
import { TopBarComponent } from './components/topBar/topBar.component';

@NgModule({
  declarations: [
    CardComponent,
    HomePageComponent,
    TopBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,

    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
