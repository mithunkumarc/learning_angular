1. By default, NgModules are eagerly loaded, which means that as soon as the app loads, so do all the NgModules, whether or not they are immediately necessary. 
2. For large apps with lots of routes, consider lazy loading—a design pattern that loads NgModules as needed. 
3. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.

example : customer and orders are modules which are loaded when it is requested (by clicking link button)

        const routes: Routes = [
          {
            path: 'customers',
            loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)// CustomersModule exported classname
          },
          {
            path: 'orders',
            loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
          },
          {
            path:'',
            redirectTo:'',
            pathMatch:'full'
          }
        ]

html : 

        <button routerLink="/customers">Customers</button>
        <button routerLink="/orders">Orders</button>
        <button routerLink="">Home</button>
