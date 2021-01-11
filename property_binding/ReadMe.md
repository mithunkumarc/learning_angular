1. Property binding in Angular helps you set values for properties of HTML elements or directives.
2. With property binding, you can do things such as toggle button functionality, set paths programmatically, and share values between components.
3. The brackets, [], cause Angular to evaluate the right-hand side of the assignment as a dynamic expression. 
4. Without the brackets, Angular treats the right-hand side as a string literal and sets the property to that static value.

usage : html


      <img [src]="itemImageUrl">
      
example : 

#### app.component.html      

        <div>
            <h3>without property binding</h3>
          <img
            width="200"
            alt="Angular Logo"
            src="https://cdn.pixabay.com/photo/2015/03/26/09/41/chain-690088_1280.jpg"      // src value is evaluated as string
          />
          <h3>with property binding</h3>
          <br />
          <img 
            width="200" 
            alt="Angular Logo" 
            [src]="imageURL" />                   // src value is evaluated as dynamic expression, imageURL defined in ts file
        </div>


#### app.component.ts

        import { Component } from "@angular/core";

        @Component({
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        })
        export class AppComponent {
          imageURL = "https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg";
