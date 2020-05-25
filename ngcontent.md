#### app component html


          <app-child>
            // to display this text ngcontent tag is required in child comp template
            Projected in the child: {{flower.emoji}}   
          </app-child>

#### child component html 

        <div class="section">
          <h3>Child</h3>
          <div>
            <ng-content></ng-content> // this tag required to display content inside child tag
          </div>

          <p>In the child: {{flower.emoji}}</p>
        </div>
