import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { WorldComponent } from
'./world.component';
import { HelloService } from './hello.service';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
  HelloComponent, WorldComponent ],
  bootstrap:    [ AppComponent ], 
  providers: [HelloService]
})
export class AppModule { }
