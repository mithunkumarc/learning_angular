
#### if you want to set value to attribute to host element through directive use hostbinding

        // myDirective component, below example can be achived in other ways explore it
        // style.domProperty
        @HostBinding('style.className')
        get cssClasses() {
        	return true;
        }
        
        <some-component myDirective></some-component>
        
        // another way with hostlistener combination
        // inside myDirective
          @HostBinding('style.backgroundColor') backgroundColor: string;
        
          constructor() {
            this.backgroundColor = 'transparent';
          }
        
          @HostListener('mouseenter') onMouseEnter() {
            this.backgroundColor = 'yellow';
          }
        
          @HostListener('mouseleave') onMouseLeave() {
            this.backgroundColor = 'transparent';
          }
          
 
 
 #### directive with multiple input
       
       // highlight.directive.ts
      import { Directive, HostBinding, Input } from '@angular/core';
      
      @Directive({
        selector: '[appHighlight]'
      })
      export class HighlightDirective {
        @HostBinding('style.backgroundColor') backgroundColor: string;
        @HostBinding('style.color') color: string;
      
        @Input('appHighlight') set highlightColor(color: string) {
          this.backgroundColor = color;
        }
      
        @Input() set textColor(color: string) {
          this.color = color;
        }
      
        constructor() {
          this.backgroundColor = 'transparent';
          this.color = 'black';
        }
      }

      
      <!-- app.component.html -->
      <div [appHighlight]="'yellow'" [textColor]="'red'">
        Hover over this text to see the highlight effect.
      </div>



#### property vs attribute 

In summary, attributes are used to define initial values in HTML, while properties represent the current state of elements in the DOM. Understanding the distinction between them is essential for effective DOM manipulation.
html element vs dom object property(after browser read html and create dom object , this node object will have properties)


####  custom directive with event emitter

        // highlight.directive.ts
        import { Directive, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';
        
        @Directive({
          selector: '[appHighlight]'
        })
        export class HighlightDirective {
          @HostBinding('style.backgroundColor') backgroundColor: string;
        
          @Input('appHighlight') highlightColor: string;
          @Output() colorChange = new EventEmitter<string>();
        
          constructor() {
            this.backgroundColor = 'transparent';
          }
        
          @HostListener('mouseenter') onMouseEnter() {
            this.backgroundColor = this.highlightColor || 'yellow';
            this.colorChange.emit(this.backgroundColor);
          }
        
          @HostListener('mouseleave') onMouseLeave() {
            this.backgroundColor = 'transparent';
            this.colorChange.emit(this.backgroundColor);
          }
        }
        
        <!-- app.component.html , in ts implment onColorChange-->
        <div [appHighlight]="'lightblue'" (colorChange)="onColorChange($event)">
          Hover over this text to see the highlight effect.
        </div>

--
#### access directive/host component using template reference variable

The exportAs property in Angular directives allows you to create a reference to the directive instance in the template. This can be useful when you want to interact with the directive's properties and methods directly from the template.

        // highlight.directive.ts
        import { Directive, HostBinding, Input } from '@angular/core';
        
        @Directive({
          selector: '[appHighlight]',
          exportAs: 'appHighlight'
        })
        export class HighlightDirective {
          @HostBinding('style.backgroundColor') backgroundColor: string;
        
          @Input('appHighlight') highlightColor: string;
        
          constructor() {
            this.backgroundColor = 'transparent';
          }
        
          setHighlightColor(color: string) {
            this.backgroundColor = color;
          }
        
          resetHighlightColor() {
            this.backgroundColor = 'transparent';
          }
        }
        
        <!-- app.component.html, use viewchild(directive/host component) to access this , check angular university-->
        <div #highlight="appHighlight" [appHighlight]="'lightblue'">
          Hover over this text to see the highlight effect.
        </div>
        <button (click)="highlight.setHighlightColor('yellow')">Set Highlight to Yellow</button>
        <button (click)="highlight.resetHighlightColor()">Reset Highlight</button>
        

#### when a component in template use directive, you can access as component / directive using viewchild
      
      @viewchild(hostcomponent) var: MyDirective;
      @viewchild(MyDirective) var: MyDirective;

