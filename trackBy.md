#### issue : *ngFor with trackBy

          If you use NgFor with large lists, a small change to one item, such as removing or adding an item, 
          can trigger a cascade of DOM manipulations. 

          For example, 
          re-querying the server could reset a list with all new item objects, 
          even when those items were previously displayed. 
          In this case, Angular sees only a fresh list of new object references and 
          has no choice but to replace the old DOM elements with all new DOM elements.

#### trackBy

        You can make this more efficient with trackBy. 
        Add a method to the component that returns the value NgFor should track. 
        In this case, that value is the hero's id. 
        If the id has already been rendered, Angular keeps track of it and doesn't re-query the server for the same id.
        
        eg :trackByItems(index: number, item: Item): number { return item.id; }
        
#### app-component.ts

        import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent {
          fruits: string[] = [];
          
          //when application loads it shows only three fruits
          constructor() {
            this.fruits = ['banana','orange','pineapple'];
          }
          
          //on click of button, because of trackBy function, only new fruit will be uploaded
          getFruits(): void{
            this.fruits = ['banana','orange','pineapple','grapes'];
          }

          //filter old fruits
          trackByFruit(index: number, fruit: string): string {
            return fruit;
          }
        }
        
#### app-component.html

        <div *ngFor="let fruit of fruits; trackBy : trackByFruit">
          {{fruit}}
        </div>
        <button (click)="getFruits()">get more fruits</button>
        

#### how to check if trackby working?

          check dom in broswer console. press F12.
          add new element, with trackby only new element added. only one dom updated.
          without trackby, whole list gets updated.

#### tobe practiced  : trackby with object

          https://dotnettutorials.net/lesson/angular-ngfor-trackby/
          
          trackByStudentID(index: number, student: any): string {
                 return student.ID;
          }

          Then do the following changes in the app.component.html file:

          <tr *ngFor=’let student of students; trackBy:trackByStudentID’>

#### links

        https://angular.io/guide/template-syntax#ngfor-with-trackby
        https://medium.com/@jinalshah999/trackby-with-ngfor-directives-in-angular-application-bd4d0db288eb
