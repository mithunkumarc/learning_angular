

RouterModule.forChild(routes) used in lazyloaded module

RouterModule.forRoot(routes) used in root module

lets say an angular project has three modules app module, customer module and order module

1. app routing module uses RouterModule.forRoot

        @NgModule({
          imports: [RouterModule.forRoot(routes)],
          exports: [RouterModule]
        })
        export class AppRoutingModule{}
  
2. customer router module uses RouterModule.forChild

        @NgModule({
          imports: [RouterModule.forChild(routes)],
          exports: [RouterModule]
        })
        export class CustomerRoutingModule{}

3. order routing module uses RouterModule.forChild 

        @NgModule({
          imports:[RouterModule.forChild(routes)],
          exports:[RouterModule]
        })
        export class OrdersRoutingModule{}
