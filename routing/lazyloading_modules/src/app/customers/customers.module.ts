import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerRoutingModule } from './customers-routing.module';

@NgModule({
  imports:[
    CommonModule,
    CustomerRoutingModule
  ],
  declarations:[ CustomersComponent ]
})
export class CustomersModule{
  constructor() {
    console.log('customer module created');
  }
}