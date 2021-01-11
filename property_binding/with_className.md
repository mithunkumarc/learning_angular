#### works similar to ngClass, (need to explore difference)

#### read :  https://ultimatecourses.com/blog/ng-class-angular-classes

#### ngClass is more flexible , multiple classes can be added.

#### app.component.css

        div {
          text-align: center;
        }
        .highlight {
          background-color: red;
        }

#### app.component.ts

        import { Component } from "@angular/core";

        @Component({
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        })
        export class AppComponent {
          highlightStyle = "highlight";
        }


#### app.component.html

        <!--The content below is only a placeholder and can be replaced.-->
        <div>
          <p [className]="highlightStyle">hello world</p>
        </div>
