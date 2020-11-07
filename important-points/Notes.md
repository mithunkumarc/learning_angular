##### Directives : Angular offers two kinds of built-in directives. Attribute directives and Structural directives.

##### Built-in Attributes  

1. Modify behavior of other HTML elements, , attributes, properties, and components. 
2. You usually apply them to elements as if they were HTML attributes, hence the name.

##### Most Common Attribute directives : 

1. NgClass : —adds and removes a set of CSS classes.

        <div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>

2. NgStyle : —adds and removes a set of HTML styles.

        <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
          This div is x-large or smaller.
        </div>

3. NgModel : —adds two-way data binding to an HTML form element.

        <input [(ngModel)]="currentItem.name" id="example-ngModel">
        *note : Import FormsModule to use ngModel


##### Built-in structural directives

1. Structural directives are responsible for HTML layout. 
2. They shape or reshape the DOM's structure, typically by adding, removing, and 
    manipulating the host elements to which they are attached.

This section is an introduction to the common built-in structural directives:

NgIf—conditionally creates or destroys subviews from the template.
NgFor—repeat a node for each item in a list.
NgSwitch—a set of directives that switch among alternative views.

https://angular.io/guide/attribute-directives
https://angular.io/guide/built-in-directives
