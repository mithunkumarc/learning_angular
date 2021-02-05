#### this topic : check with template variable

        https://angular.io/guide/template-reference-variables

A template reference variable is often a reference to a DOM element within a template. 
It can also be a reference to an Angular component or directive or a web component 
That means you can easily access the variable anywhere in the template.



#### hello.comp.ts : app-comp.ts is omitted

        import { Component, Input } from '@angular/core';

        @Component({
          selector: 'hello',
          template: `<h1></h1>`,
          styles: [`h1 { font-family: Lato; }`]
        })
        export class HelloComponent  {
          @Input() name: string;

          sayHello(){
            console.log("hello chikmagalur");
          }

          display(data){
            console.log("data : ",data);
          }
        }


#### app.comp.html

          <!-- 
            #helloComp is a template reference variable 
          -->

          <hello name={{name}} #helloComp ></hello>

          <!-- accesing component instance variable : name is property of hello component -->
          <div>
          1.Displaying comp instance var value using temp ref var : {{helloComp.name}}
          </div>

          <div>2. access comp method</div>
          <!-- 
            calling component method using temp ref var -->
          <button (click)="helloComp.sayHello()">click</button>
          <br />


          <div>3.using temp ref to send input box value</div>
          <!-- can be used with input tag -->
          <input type="text" placeholder="send something" #data />
          <br>
          <button (click)="helloComp.display(data.value)">send input box data</button>
          <br/>



#### tobe : can be used with ngForm to access form values, ?? compare with formGroup and formControlName
