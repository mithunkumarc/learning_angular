### where to instantiate content child?

    content child must be instantiated in enclosing component.
    example:
    <hello><p #test>content child data</p></hello>

    instantiate #test content child inside hello component.

####    content child
    
1. used to send html content to child component
2. content child is embedded inside child component tag
3. use ng-content tag as placeholder to display content child
4. use template ref #someid to read contentchlid

      
example :  

https://stackblitz.com/edit/ma-contentchild


brief code : 

#### parent component : app.component.html

        <hello>
          <!-- below button is our contentchild -->
          <button #test>click</button>
        </hello>

#### child component : hello.component.html

          <div>
             <!-- this is where content child(our click button) appear. ng content is like placeholder to content child -->
             <ng-content></ng-content>
          </div>
          
          <p>manipulating content child : when you click below button, bg color of click button will be changed</p>
          <button (click)="seemagic()">magic</button>
          
#### child component : hello.component.ts

          @ContentChild('test') content: ElementRef;
          
          seemagic() {
            const el = this.content.nativeElement;
            el.setAttribute('style', 'color: white; background: red');
          }
          
#### Use Renderer2 to change style instead ElementRef

#### need to explore contentchild more 

https://jaxenter.com/simplifying-viewchild-contentchild-angular-142894.html
