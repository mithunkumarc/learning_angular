import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { LaptopComponent } from './laptop/laptop.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, BoxComponent, LaptopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
