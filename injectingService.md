> example shows services used as singleton, two compnents using same service instance 

#### two ways to declare dependency in angular

        (1). in module file using providers key under @NgModule and declaring service as Injectable
        used for singleton service
        
        (2). while declaring component, using provide under @Component and declaring service as Injectable
        use for each component require different service instance
        
        
        
#### app.module.ts 

        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { HelloComponent } from './hello.component';
        import { WorldComponent } from './world.component';
        import { ServiceInjectorS } from './service.injector';

        @NgModule({
            declarations: [ AppComponent, HelloComponent, WorldComponent ],
            imports: [ BrowserModule ],
            bootstrap: [ AppComponent ],
            //providers: [ ServiceInjectorS ], // indicate point (1)
        })
        export class AppModule { }
         
#### hello.component.ts   

          import { Component, Injectable, Injector } from '@angular/core';
          import { ServiceInjectorS } from './service.injector';

          @Component({
              selector: 'hello-app', 
              template: '<h1>{{ text }}</h1>',
              // providers: [ ServiceInjectorS ]      //injecting at component level (2)
          }) export class HelloComponent {
              text;

              constructor(private injector: Injector) {}

              ngOnInit() {
                  let newService = this.injector.get(ServiceInjectorS);
                  this.text = newService.message;
                  console.log("inside hello comp : ",this.text)
              } 
          }
          
#### world.component.ts

            import { Component, Injectable, Injector } from '@angular/core';
            import { ServiceInjectorS } from './service.injector';

            @Component({
                selector: 'world-app', 
                template: '<h1>{{ text }}</h1>',
                // providers: [ServiceInjectorS]  // //injecting at component level (2)
            }) export class WorldComponent {
                text;

                constructor(private injector: Injector) {}

                ngOnInit() {
                    let newService = this.injector.get(ServiceInjectorS);
                    this.text = newService.message;
                    console.log("world comp : ",this.text)
                } 
            }
            
#### common declaration of service for both wasy : service.injector.ts

        import { Component, Injectable, Injector } from '@angular/core';
        @Injectable({
          providedIn: 'root', // use this for first way (module declaration) 
        })
        export class ServiceInjectorS {
            message = 'I Injector';
            constructor(){
              console.log('service injector constructor');
            }
        }
                     
            
#### app.component.ts

        import { Component, Injectable, Injector } from '@angular/core';
        import { ServiceInjectorS } from './service.injector';

        @Component({
            selector: 'my-app', 
            templateUrl : './app.component.html',
        }) export class AppComponent {

        }

#### app.component.html

        <hello-app></hello-app>
        <world-app></world-app>


> updated : without intermediate instance injector : https://github.com/mithunkumarc/angular/tree/master/injectingServiceExample
