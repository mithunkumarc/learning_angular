#### 1. view encapsulation

      the style applied to component level will affect only component style not outside the component. Use global style to resuse style accros components

#### 2. style using custom component element vs :host 
      
      # this style works only if you declare in global style.css file, if you declare below style in app.component.scss it will not work
      app-component {
        background-color: yellow;
      }
      
      # in order to apply above style to component use :host , :host will not affect child components
      :host {
        background-color: yellow;
      }
