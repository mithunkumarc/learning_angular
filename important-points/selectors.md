Selector specifies the simple CSS selector, where our view representing the component is placed by the Angular.

example : 

        @Component({
          selector: 'my-app',     // selector
          templateUrl: './app.component.html',
          styleUrls: [ './app.component.css' ]
        })
        export class AppComponent  {
          name = 'Angular ' + VERSION.major;
        }
        

        // usage : in index html
        <my-app>loading</my-app>
