ComponentFactoryResolver : 

component can be dynamically loaded using ComponentFactoryResolver.


step 1 : create component factory using ComponentFactoryResolver  

            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponent);
            // clear old component
            this.sample.clear();
 
step 2 : pass component Factory to ViewContainerRef.(create template reference var in template) eg : #sample  

            // in template : <ng-container #sample></ng-container> 
            let cmpRef = this.sample.createComponent(componentFactory);
            
            
            
step 3 : initialize property, both as name property
    
            let comp = cmpRef.instance as HelloEnComponent | HelloKnComponent;
            comp.name = "welcome"; // name : @Input property
            
