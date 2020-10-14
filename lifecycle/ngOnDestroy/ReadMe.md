1.  The ngOnDestroy or OnDestroy hook is called just before the Component/Directive instance is destroyed by Angular.  
2.  Use this hook to Perform any cleanup logic for the Component.  
2.  This is the correct place where you would like to Unsubscribe Observables and detach event handlers to avoid memory leaks.

#### this examples holds for 1. how to destroy component and 2. ngDestroyMethod() angular component lifecyle callback


#### child component will be removed from parent compoenent. we can see ngOnDestroy being called inside child component.

#### parent component : app.component.html
        
        <!-- when flag changes from true to false, component will be destroyed -->
        <hello name="{{ name }}" *ngIf="flag"></hello>    
        <p>clicking below button will destroy hello component.</p>
        <button (click)="removeHello()">destroy hello component</button>


#### parent component : app.component.ts

        import { Component } from "@angular/core";

        @Component({
          selector: "my-app",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        })
        export class AppComponent {
          name = "Angular";
          flag = true;
          removeHello() {
            this.flag = false;
          }
        }

#### child component : hello.component.ts

          import { Component, Input, OnDestroy } from "@angular/core";

          @Component({
            selector: "hello",
            template: `
              <h1>Hello {{ name }}!</h1>
            `,
            styles: [
              `
                h1 {
                  font-family: Lato;
                }
              `
            ]
          })
          export class HelloComponent implements OnDestroy {
            @Input() name: string;
            ngOnDestroy() {
              console.log("destroyed");
            }
          }


https://stackblitz.com/edit/ma-destroying-component
