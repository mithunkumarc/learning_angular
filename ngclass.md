#### The NgClass directive allows you to set the CSS class dynamically for a DOM element.

> there are some other ways to impliment ngclass refer : https://angular.io/api/common/NgClass

#### app.component.css

        .primary {
          color: red;
        }
        .secondary {
          color: green;
        }
        
#### app.component.html

        <div [ngClass]="getStyles()">
          sometext
        </div>

        <button (click)="changeStyle()">Change</button>

        <div [ngClass]="{
            'primary': country === 'UK',
            'secondary': country !== 'UK'
          }">String expr example</div>
          
        <div [class.primary]="true">another syntax example</div>
          
#### app.component.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent  {
          flag1: boolean = true;
          flag2: boolean = false;
          country: string = "UK";

          changeStyle() {
            this.getStyles();
            this.country = this.country === "UK" ? "UN" : "UK";
          }

          getStyles() {
            this.flag1 = !this.flag1;
            this.flag2 = !this.flag2;
            return {'primary' : this.flag1, 'secondary' : this.flag2 };
          }
        }
        
        
#### live example

ngClass mentioned in angular doc

https://stackblitz.com/edit/ma-ngclass

