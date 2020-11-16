import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
  import('./customers/customers.module')
  returns promise so to call resove use then().
 */

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


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
