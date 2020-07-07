import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloEnComponent, HelloKnComponent } from './hello.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HelloEnComponent, HelloKnComponent],
  entryComponents: [HelloEnComponent, HelloKnComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
