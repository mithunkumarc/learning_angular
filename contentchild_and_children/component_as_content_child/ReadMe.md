till now we have seen html dom as content child.  
this example explain that you can have component(laptop component) as content child.

#### app comp html

        <box>
          <laptop>
        </box>


#### box.html

        <ng-content></ng-content>        <!-- placeholder for laptop compenent(its html content displays here -->
