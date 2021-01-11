Parent component can send data to Child component 

#### in the parent component : 

      <child-comp [childItem]="data"></child-comp>
      
#### example

#### app.component.ts

          import { Component } from "@angular/core";

          @Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
          })
          export class AppComponent {
            childInfo = "hello Child!!";        // data tobe send to child
          }
          
          
#### app.component.html


          <div>
            <h1>
              <child-comp [child_title]="childInfo"></child-comp>     // [child_title] : child_title is input property in child
            </h1>
          </div>
          
#### child.component.ts

          import { Component, Input } from "@angular/core";

          @Component({
            selector: "child-comp",
            template: `<h2>{{ child_title }}</h2>`      // display here
          })
          export class ChildComponent {
            @Input()
            child_title = "ChildComp";        // accepting data here
          }


