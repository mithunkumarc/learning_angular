#### if then else block

        example : age property checked , if > 18 he can vote or else cannot
        
#### app-comp.ts

        import { Component } from '@angular/core';
        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent  {
          age: number = 0;
          getAge(): number {
            return this.age;
          }
          incrementAge() {
            this.age++;
          }
        }

#### app-comp.html


        {{age}}
        
        <br>
        <button (click)="incrementAge()">increment</button>
        <br>
        
        <div *ngIf="getAge() > 18; then thenblock else elseblock" ></div>
        
        <ng-template #thenblock>
          yay,you can vote
        </ng-template>

        <ng-template #elseblock>
          Oops, you can't vote
        </ng-template>
        
---        
        
#### ngIf  :simple if condition

#### app-comp.ts

                import { Component } from '@angular/core';

                @Component({
                  selector: 'my-app',
                  templateUrl: './app.component.html',
                  styleUrls: [ './app.component.css' ]
                })
                export class AppComponent  {
                  age: number = 10;
                }

#### app-comp.html

                age is : {{age}}
                <p *ngIf="age > 9">age is greater than 9</p>
                <p *ngIf="age < 10">age is less than 10</p>

                *note : it can applied to component
                <my-app *ngIf="condition"></my-app>
                <hello *ngIf="true"></hello>             # displayed
                <hello *ngIf="false"></hello>            # not displayed
---
