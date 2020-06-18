if you are not using component by its selector (inside html : <compname />) , and you are using component name itself.  
eg : ngComponentOutlet  

angular site says :  

        An entry component is any component that Angular loads imperatively, 
        (which means you’re not referencing it in the template), by type.  
        You specify an entry component by bootstrapping it in an NgModule, or including it in a routing definition.  

usage : used in NgModule

          @NgModule({
            imports: [BrowserModule, BrowserAnimationsModule, MatTabsModule, MatToolbarModule],
            declarations: [AppComponent,
            UserInformationComponent,
            ThankYouComponent,
            PaymentComponent
            ],
            entryComponents:[
              UserInformationComponent,
              PaymentComponent,
              ThankYouComponent
            ],
            bootstrap: [AppComponent]
          })
          export class AppModule {}
          
#### There are two main kinds of entry components:

1.  The bootstrapped root component.  starting point of app like AppComponent

        @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            AppRoutingModule
          ],
          providers: [],
          bootstrap: [AppComponent] // bootstrapped entry component, loads when application launched
        })


2.  A component you specify in a route definition. another example, comp used with its selector tag

        const routes: Routes = [
          {
            path: '',
            component: CustomerListComponent    // compiler will add this comp to entryComponentsList
          }
        ];
