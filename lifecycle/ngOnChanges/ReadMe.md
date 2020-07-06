when parent component changes child component @Input property, ngOnChanges will be called, it is called on child component. NOT ON PARENT COMPONENT.

Remember that ngOnChanges is specific to bound inputs(@Input) on the component.  

This means if you don't have any @Input properties on a child, ngOnChanges will never get called.
