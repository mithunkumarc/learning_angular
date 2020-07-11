#### attribute directive : used to apply inline style

app.component.html

          <p [style.color] = "color"                    <!-- value passed from component -->
             [style.background-color]="'yellow'"        <!-- hardcode value -->
          >
            Start editing to see some magic happen :)
          </p>
          
          <!-- another way -->
          <p [ngStyle]="
          {
            'color': color, 'background-color':'yellow'
          }
          ">another example </p>

app.component.ts

            import { Component } from '@angular/core';

            @Component({
              selector: 'my-app',
              templateUrl: './app.component.html',
              styleUrls: [ './app.component.css' ]
            })
            export class AppComponent  {
              color = 'red';
            }
