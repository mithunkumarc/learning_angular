import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiplesPipe } from './multiples.pipes';
import { FilterEvenNumberPipe } from './filter-number.pipes';
import { SquareNumberPipe } from './square-number.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    MultiplesPipe, 
    FilterEvenNumberPipe, 
    SquareNumberPipe 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
