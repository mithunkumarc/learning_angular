import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RedModule } from './red/red.module';
import { GreenModule } from './green/green.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    RedModule, 
    GreenModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
