#### onChanges : 

        The Angular invokes ngOnChanges life cycle hook whenever any data-bound input property of 
        the component or directive changes.

        eg: if Component has property @Input() hello: string;, every time hello value changes, ngOnChange() will be invoked.
        
        reference : 
        https://www.tektutorialshub.com/angular/angular-component-life-cycle-hooks/

#### drawback of onChange : not called every time 

        ngOnChange works for primitve datatypes
        if you are passing object from parent to child, onChange will not work
        
        Solution : use ngDoCheck


when parent component changes child component @Input property, ngOnChanges will be called, it is called on child component. NOT ON PARENT COMPONENT.

Remember that ngOnChanges is specific to bound inputs(@Input) on the component.  

This means if you don't have any @Input properties on a child, ngOnChanges will never get called.  

ngOnChanges gets called before (child component's)ngOnInit and whenever a component's bound input is changed FROM THE PARENT COMPONENT.  

ngOnChanges of parent method will not be called. only child ngOnchanges called only if there is change in @Input properties from parent component.  

when child component change its @Input property ngOnChanges is not called, it is called only when @Input prop changed from parent component.  

#### Parent -> changes any @Input prop of Child component -> child component's ngOnChanges method will be called 

#### when to use? : to track the changes in @Input bound properties in child component. you can access to previous value, current value, first change:true/false

first change : means whether @Input prop changed for first time or not
