html 

        <p>flexlayout-example works!</p>

        <div class="box" fxLayout="row wrap" fxLayout.xs="column" fxLayoutGap="10px">
            <div fxLayoutAlign="start center">Home</div>
            <!-- fxFlex used to fill gap between Home and other menu -->
            <div fxFlex></div>
            <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign="end center">
                <div>one</div>
                <div>two</div>
                <div>three</div>
            </div>

        </div>
        
        
import flexmodule in appmodule, install angular flex module from npm package        





![screenshot](https://github.com/mithunkumarc/learning_angular/blob/master/angular_flex_layout/example_fill_gap/Screenshot%20from%202022-06-26%2011-12-30.png)
