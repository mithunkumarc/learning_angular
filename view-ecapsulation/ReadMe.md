#### 1. view encapsulation

      the style applied to component level will affect only component style not outside the component. 
      avoids style interfearing with eachother
      Use global style to resuse style accros components
      how it works in background ? : each host gets unique attribute (_nghostc0 _nghostc1 etc) 
      if you use ::ng-deep special atribute not applied(style become common) 
      note ; careful about ng-deep (use :host or custom element before applying or else it affect other styles)
      
#### ecapsulation attributes

      each element gets specific attributes using which angular apply styles
      eg : <div class='parent-elem' _nghost_c0 >
                  <div class='chlid-elem' _nghost_c1></div>
            </div>
                  
#### 2. style using custom component element vs :host 
      
      # this style works only if you declare in global style.css file, 
      # if you declare below style in app.component.scss it will not work
      app-component {
        background-color: yellow;
      }
      
      # in order to apply above style to component use :host , :host will not affect child components
      :host {
        background-color: yellow;
      }


#### 3. :host-context()

      Is syntax for styling a specific class anywhere outside the current element. 
      The class must already be applied to an element outside the scope of the current element.

      eg : 

      # child component html
            <p class="title">host works!</p>

      # child component scss, condition is parent dom/element must have class class theme
            :host-context(.theme) .title {
                color: red;
            }

      # parent component html, condition met,
            <div class="theme">
                <app-host></app-host>
            </div>

      


#### 4. ViewEncaplustion.None :  no specific attribute(encapsulation attribute)

            host host context , doesn't works
            replace host with element names
            eg : app-child-component{}
            
#### 5. ViewEncaplustion.Emulated(Default)  specific/unique _nghost_c0.. attribute for every element (style to specific elem)

#### 6. ViewEncaplustion.ShadowDom 

      inspect : component elem is inside shadow root, styles inside shadow root only affect inside component not outside 
      similar to Emulated , but implementation is different
      host and host-context works
      doesn't use spceific attribute
      style is only visible in shadow root(parent dom around current component)

#### 7. ViewEncaplustion.native(deprecated)
