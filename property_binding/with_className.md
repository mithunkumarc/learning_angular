#### works similar to ngClass, (need to explore difference)

The ClassName is the property name of HTML Element.  
Hence we can make use of Property binding to assign the class name to any HTML element.  

The following example assigns CSS Class red to the div element.  

 
                        <div [className]="'red'">Test</div>
 

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
