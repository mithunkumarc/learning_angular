####

        The Angular safe navigation operator, ?, guards against null and undefined values in property paths. 
        Here, it protects against a view render failure if item is null.

eg : 
        <p>The item name is: {{item?.name}}</p>


        output : 
        If item is null, the view still renders but the displayed value is blank; 
        you see only "The item name is:" with nothing after it.

####  Consider the next example, with a nullItem.


        The null item name is {{nullItem.name}}

        Since there is no safe navigation operator and nullItem is null, 
        JavaScript and Angular would throw a null reference error and break the rendering process of Angular:

         output on console :
        TypeError: Cannot read property 'name' of null.
        
        
#### example : app-comp.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'my-app',
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent  {
          //framework = {name:null};
        }

#### app-comp.html

        <!-- 
          check console : 
          ERROR
        Error: Cannot read property 'work' of undefined -->
        <p>{{framework.name}}</p>
        <!--  -->


        <!-- no error -->
        <p>{{framework?.name}}</p>
        <!--  -->
