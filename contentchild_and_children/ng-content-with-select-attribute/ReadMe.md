
Select attribute of ng conent becomes handy when you have multiple content child projections.

#### for example : problem when we have multiple content projection
              
#### parent component html page

              <someapp-component>
                <div>this is header</div>                           <!-- first content -->
                <!-- content provided by "someapp compoent" -->
                <div>this is footer</div>                           <!-- second content -->
              </someapp-component>
              
#### someapp.compoennt.html : 

##### as you can see there are multiple ng-content tags, select tag can decide which content should be displayed where
              
              <ng-content></ng-content>     <!-- header text can be brought here with the help of select tag -->
              <p>this is contnent </p>      
              <ng-content></ng-content>


#### fix : using select tag
              
              <someapp-component>
                <div class="heading">this is header</div>                           <!-- class heading used as value for select attribute -->
                <!-- content provided by "someapp compoent" -->
                <div class="footer-info">this is footer</div>                           <!-- class footer-info used as value for select attribute -->
              </someapp-component>
              
              <ng-content select=".heading"></ng-content>     <!-- header text can be brought here with the help of select tag -->
                <p> this is contnent </p>
              <ng-content select=".foooter-info"></ng-content>
              
              
              
reference : 

https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/
https://stackblitz.com/edit/ma-content-child-select-attribute
