#### how dependency injection works

provider : creates dependency on behalf of DI  (uses factory function), if no provider (static inject error) NullInjectError 
      
      // factory function
      function providerfunc(http:HttpClient): MyService {
      	return new MyService(http);
      }
      
      //unique identifier for dependency
      const My_service = new InjectionToken<MyService>("myservice");
      
      // use config object in providers, 
      // provide: tokenName, 
      // useFactory: factoryFunction, deps: [listOfServiceDependencies]
      // inject using token name(notice constructor)
      component({
        ....,
      	providers: [
      		{ provide: My_service,  useFactory: providerfunc, deps: [HttpClient]}
      	]
      })
      class mycomponent {
        constructor(@Inject(My_service) private myservice: MyService) {
        }
      }
      
#### service declaration

    providedIn : root or module name
    @service

#### injection token in new version

      new version injection token is not required
      class names can be used as injection token
            [{provide: Myservice, useClass: Myservice}] equivalent to [Myservice, ...]
      if both injection token and class name is same then no need to declare 
      since services  are classes their name can be used as injection token
      classes are runtime construct(instances can be creatd)
      interfaces cannot be used as injection token as it is only compile time construct
