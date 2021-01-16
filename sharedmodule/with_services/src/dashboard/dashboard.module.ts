



import {DashboardHome} from './dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {
        path: '', component: DashboardHome
    },
];

@NgModule({
    declarations: [
        DashboardHome,
    ],
    imports: [ 
        SharedModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class DashboardModule {
}