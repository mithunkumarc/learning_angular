import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenComponent } from './green.component';
import { SharedModule } from '../sharedmodule/shared.module';

@NgModule({
  imports:      [ 
    CommonModule,
    SharedModule
  ],
  declarations: [ GreenComponent ],
  exports: [ GreenComponent ]
})
export class GreenModule { }
