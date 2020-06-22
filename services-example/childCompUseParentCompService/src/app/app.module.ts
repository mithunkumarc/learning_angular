import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from 
'./hello.component';
import { HelloChildComponent } from './hellochild.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
  HelloComponent,
  HelloChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
