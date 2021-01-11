#### ngClass as used as property binding for class attribute in HMTL

usage: 

          <some-element [ngClass]="'first second'">...</some-element>
          
more info on usage of ngClass: 

          <some-element [ngClass]="'first second'">...</some-element>

          <some-element [ngClass]="['first', 'second']">...</some-element>

          <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

          <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

          <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>

example : 

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
          title = "CodeSandbox";
          hightlightStyle = "highlight";        // hightlightStyle used as value for ngClass(property binding)
        }


#### app.component.html


        <div>
          <p [ngClass]="hightlightStyle">       // class value is string but, [ngClass] value must be expression
            {{title}}
          </p>
        </div>

