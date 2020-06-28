import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red.component';
import { SharedModule } from '../sharedmodule/shared.module';

@NgModule({
  imports:      [ 
    CommonModule,
    SharedModule
   ],
  declarations: [ RedComponent ],
  exports: [RedComponent]
})
export class RedModule { }
