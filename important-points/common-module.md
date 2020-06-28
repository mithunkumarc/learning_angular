@angular/common


        Implements fundamental Angular framework functionality, 
        including directives and pipes, location services used in routing, HTTP services, localization support, and so on.

        The CommonModule exports are re-exported by BrowserModule, 
        which is included automatically in the root AppModule when you create a new app with the CLI new command.


usage : used in feature module where , root functionalities are re-exported to feature module through common module

        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';

        @NgModule({
          imports: [
            CommonModule
          ],
          declarations: []
        })
        export class CustomerDashboardModule { }
