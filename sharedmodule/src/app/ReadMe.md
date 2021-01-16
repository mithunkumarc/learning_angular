
example includes : 
    
        RedModule and GreenModule uses SharedComponent declared in SharedModule.
        As feature modules, RedModule and GreenModule imported in AppModule          

this example has two feature module red and green , which uses shared module. red and green used in appmodule.  

        SharedModule => exports Shared Component 
        RedModule RedComponent <= imports Shared Component from SharedModule
        GreenModule GreenComponent <= imports Shared Component from SharedModule
        AppModule AppComponent <= imports RedComponent and GreenComponent from RedModule and GreenModule

steps  

1. create red module and red component. exports red component from RedModule
2. create green module and green component. exports green component from GreenModule
3. create Shared module and shared component, export shared component from SharedModule
4. import SharedModule in RedModule and GreenModule
5. import RedModule and GreenModule in AppModule
6. AppComponent can use RedComp and GreenComp selectors in templates
