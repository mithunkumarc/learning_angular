Instantiates a single Component type and inserts its Host View into current View.  
NgComponentOutlet provides a declarative approach for dynamic component creation.

* note : mention component in entryComponent list in AppComponent(bootstarp comp)  

one of the example is accomadating components for each tab in material tab  

[check this example](https://github.com/mithunkumarc/angular/tree/master/material-tab)  


        <ng-container *ngComponentOutlet="ExpressionReturnsComponent/ComponentName"></ng-container>
        
references : 

1.  [material tab example](https://medium.com/@symposia/dynamic-component-rendering-in-angular-5-with-ngcomponentoutlet-410bec3ece75)

example : 

        https://www.digitalocean.com/community/tutorials/angular-reusable-components-ngtemplateoutlet
