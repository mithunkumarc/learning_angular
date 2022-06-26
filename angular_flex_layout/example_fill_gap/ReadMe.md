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
        
        
import flexmodule in appmodule, install angular flex module from npm pacage        
