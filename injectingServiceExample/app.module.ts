import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorldComponent } from './world.component';
import { ServiceInjectorS } from './service.injector';

@NgModule({
    declarations: [ AppComponent, HelloComponent, WorldComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ],
    //providers: [ ServiceInjectorS ],
})
export class AppModule { }
