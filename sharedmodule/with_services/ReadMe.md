#### problem  : especially in lazy loading modules with service exported by shared module : multiple instances of services created

1. services must be singleton. only one instance must be availabe accoss app.
2. lets consider your app has a shared module and multiple feature modules(along with app module).
3. lets consider shared module is exporting a service to all modules.
4. In the above case, Because of Dependency Injection works at module level, multiple instances of services might be created.
5. to test this, inject service to multiple modules(components) accross app and call increment counter method and print.
// expected output : single counter must be created , actual output : multple counters get created.

#### solution idea?? : 
        
        if services declared in shared module and also in lazy loading module providers(or root),
        multiple instances of services created.
        so solution would be declare services in shared module, 
        pull the same declaration in root module to avoid multiple dependency injection.

### working solution : 
### 1. shared module must avoid declaring service in providers in shared module ts file.

        import { MyService } from "./myservice.service";
        @NgModule({
          declarations: [TestDirective],
          exports: [TestDirective]
          //providers: [MyService]        // dont do this
        })
        export class SharedModule {

#### 2. defining a static forRoot method in the shared module that returns a ModuleWithProviders object
##### import this forRoot config in root(app) module to register module(shared) and service 

      import { TestDirective } from "./test.directive";
      import { ModuleWithProviders, NgModule } from "@angular/core";
      import { MyService } from "./myservice.service";

      @NgModule({
        declarations: [TestDirective],
        exports: [TestDirective]     
      })
      export class SharedModule {
        static forRoot(): ModuleWithProviders {
          return {
            ngModule: SharedModule,
            providers: [MyService]
          };
        }
      }
      
      // instead of defining our service in the providers property, 
      // we need to create a static method called forRoot that exports the service along with the module itself.

#### 3.  app routing module

      @NgModule({
        imports: [
          // ...
          SharedModule.forRoot()        // reusing config from shared module(which includes services)
        ],
        declarations: [AppComponent, HelloComponent],
        bootstrap: [AppComponent]
      })
      export class AppModule {}

read :   
https://angular-2-training-book.rangle.io/modules/shared-di-tree  
https://www.digitalocean.com/community/tutorials/angular-providers-shared-modules  
https://www.youtube.com/watch?v=SBSnsNHQYo4&t=59s  

live :   
https://stackblitz.com/edit/ma-shared-module-singleton-service
