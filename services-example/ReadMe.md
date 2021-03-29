dedicated to service examples


todo  

      https://angular.io/guide/hierarchical-dependency-injection


#### service can be registered to dependency injecting system at either in two places

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
