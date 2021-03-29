dedicated to service examples


todo  

      https://angular.io/guide/hierarchical-dependency-injection


#### service can be registered to dependency injecting system at either in three places

1. appmodule: if you register service here then no need of doing it again in @Injectable({providedIn: 'root'})

            @NgModule({
              imports:      [ BrowserModule, FormsModule ],
              declarations: [ AppComponent, HelloComponent, WorldComponent ],
              bootstrap:    [ AppComponent ],
              providers: [ HelloService ]                   // no need of @Injectable({providedIn: 'root'})
            })
            export class AppModule { }
            
            
            
2. inside service class: if you register in service class then no need to do it again in appModule ts

            @Injectable({
              providedIn: 'root'
            })
            export class HelloService {}

3. inside component which uses service: uses providers attribute


            @Component({
              selector: 'hello',
              template: `<h1>Hello {{name}}!</h1>`,
              styles: [`h1 { font-family: Lato; }`],
              providers: [ HelloService ]  // no need to register in appModule/inside service class
            })
            export class HelloComponent  {
              @Input() name: string;
              constructor(helloService: HelloService) {
                console.log(helloService.getData());
              }
            }


** Note : 

      When you add a service provider to the root application injector, it’s available throughout the app.
      You should always provide your service in the root injector unless there is a case where you want 
      the service to be available only if the consumer imports a particular @NgModule.
