creating custom module


#### start with basic angular project with app module

1. create module view/view.module.ts
2. create component view/view.component.ts
3. declare ViewComponent inside view.module		  declarations: [ ViewComponent ],
4. export ViewComponent from view.module 			exports : [ ViewComponent ]
5. import ViewModule in app.module.ts
6. you can use ViewComponent in app module(in any of component belong to app module)


#### view.module.ts

        import { NgModule } from '@angular/core';
        import { ViewComponent } from './view.component';
        import { CommonModule } from '@angular/common';
        @NgModule({
          imports:      [ CommonModule ],
          declarations: [ ViewComponent ],
          exports : [ ViewComponent ]
        })
        export class ViewModule { }


#### view/view.component.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'my-view',
          template: `{{name}}`
        })
        export class ViewComponent  {
          name = 'view component';
        }


#### app.component.ts

        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { ViewModule } from './view/view.module';
        import { AppComponent } from './app.component';

        @NgModule({
          imports:      [ BrowserModule, ViewModule ],
          declarations: [ AppComponent ],
          bootstrap:    [ AppComponent ]
        })
        export class AppModule { }


#### app component html

        import { Component } from '@angular/core';

        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent  {
          name = 'Angular';
        }


#### app.component.html : using view component selector 

        <my-view></my-view>
