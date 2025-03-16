#### 1. view encapsulation

      the style applied to component level will affect only component style not outside the component. 
      avoids style interfearing with eachother
      Use global style to resuse style accros components
      how it works in background ? : each host gets unique attribute (_nghostc0 _nghostc1 etc) 
      if you use ::ng-deep special atribute not applied(style become common) 
      note ; careful about ng-deep (use :host or custom element before applying or else it affect other styles)
      

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

      


#### 4. ViewEncaplustion.None ViewEncaplustion.Emulated(Default) ViewEncaplustion.ShadowDom ViewEncaplustion.native(deprecated)
