#### providers : 

      provides dependencies , uses factory pattern
      
      declaration
            eg : 
            component({
        ....,
      	providers: [
      		{ provide: My_service,  useFactory: providerfunc}
      	]
      })
                  

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

#### Hierarchial dependency injection

- providers can be defined at each component level, i.e, Parent component and child component
- if parent and child component both declare same dependency(services) in providers.  
- two instances of services are created, one at child level and one at parent level(avoid this scenario).  
- if you skip declaring dependency(service) in child component, it will look in parent component and use that dependency. (best scenario - injectable root)
- if component and services (providers ) tightely coupled, when component destroyed, service also get destroyed.



#### TreeShakable :  doubt**

      creating service only if requested (user providedIn for implementation)

- provideIn is treeshakable syntax, if injectable service/class is not used it will not be added to bundle
- if service is used only specific to a class then use providers(which provides dependency) at class level
- if service is used accross app use providedIn syntax at Injectable(service level declaration: treeshakable syntax)
- With providedIn: 'any', all eagerly loaded modules share a singleton instance; 
- lazy loaded modules each get their own unique instance.

#### Injecting class

      
      export interface AppConfig {
      	apiUrl: string;
      	courseCacheSize: number;
      }
      
      
      export cons APP_CONFIG: AppConfig = {
      	apiUrl: 'http://localhost:9000',
      	courseCacheSize: 10
      }
      
      export const CONFIG_TOKEN = 
       	new InjectionToken<AppConfig>('CONFIG_TOKEN', {
       		providedIn: 'root',
       		factory: () => APP_CONFIG
       	})
       	
       //component
       constructor(@nject(CONFIG_TOKEN) private config: AppConfig) {}


#### providedIn vs Providers

> https://medium.com/@pratap-aditya/angular-providedin-vs-providers-arrays-17b475f03cbb
      
      There are two ways to create a single service in angular that is by using -
      
      1. providedIn property
      2. NgModule providers arrays
