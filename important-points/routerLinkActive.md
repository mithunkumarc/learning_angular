In routing, selected route(link) can be highlighted using routerLinkActive attribute.
Default higlighted color is red.

syntax example : 

          <a [routerLink]="['/first-component','childb']" routerLinkActive="active" >child b</a>


customize higlighted color :

first.component.css

                .active {
                  color: cyan;
                }
                
first.component.ts          
          
          @Component({
            selector: 'first',
            templateUrl: './first.component.html',
            styleUrls: ['./first.component.css']
          })
