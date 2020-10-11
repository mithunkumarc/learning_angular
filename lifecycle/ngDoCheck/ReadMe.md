1. The Angular ngOnChanges hook does not detect all the changes made to the input properties.  
2. especially when input property is not primitive type. (ngOnChange detect only changes to primitive type).   
    ex : @Input() myprop: SomeObjectTypeOrInterfaceType.   

3. Use this hook to Implement a custom change detection, whenever Angular fails to detect the changes made to Input properties.  


https://stackblitz.com/edit/ma-ngdocheck


https://www.tektutorialshub.com/angular/angular-component-life-cycle-hooks/
