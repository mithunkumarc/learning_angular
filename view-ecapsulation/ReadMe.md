#### 1. view encapsulation

#### 2. style using custom component element vs :host 
      
      # this style works only if you declare in global style.css file, if you declare below style in app.component.scss it will not work
      app-component {
        background-color: yellow;
      }
      
      # in order to apply above style to component use :host 
      :host {
        background-color: yellow;
      }
