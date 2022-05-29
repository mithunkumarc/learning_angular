using npm

install bootstrap, jquery.js, popper.js 

in angular.json file , under architect build : update styles and scripts


            "styles": [
                "src/styles.css",
                "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
            
if not working

            @import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // in styles.css

check in one of component html

        <button type="submit" class="btn btn-primary">Submit</button> 
