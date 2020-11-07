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

##### NgIf : conditionally creates or destroys subviews from the template.

You can add or remove an element from the DOM by applying an NgIf directive to a host element. 
Bind the directive to a condition expression like isActive in this example.

        <app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>
        
When the isActive expression returns a truthy value, NgIf adds the ItemDetailComponent to the DOM. 
When the expression is falsy, NgIf removes the ItemDetailComponent from the DOM, destroying that component and all of its sub-components.

Another advantage of ngIf is that you can use it to guard against null.

        <div *ngIf="currentCustomer">Hello, {{currentCustomer.name}}</div>


##### NgFor : repeat a node(block of html) for each item in a list.

NgFor is a repeater directive—a way to present a list of items. 

        <div *ngFor="let item of items">{{item.name}}</div>

The index property of the NgFor directive context returns the zero-based index of the item in each iteration. 
You can capture the index in a template input variable and use it in the template.

        <div *ngFor="let item of items; let i=index">{{i + 1}} - {{item.name}}</div>

##### NgSwitch : a set of directives that switch among alternative views.

https://angular.io/guide/attribute-directives
https://angular.io/guide/built-in-directives
