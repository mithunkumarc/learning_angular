import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentProjectComponent } from './studentproject/studentproject.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StudentComponent, StudentProjectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
