import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FilterOddNumberPipe } from './filter-number.pipes';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    FilterOddNumberPipe, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
