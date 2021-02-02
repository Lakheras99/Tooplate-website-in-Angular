import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
