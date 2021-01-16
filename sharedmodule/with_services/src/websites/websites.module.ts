import {WebsitesHome} from './websites.component';
import {SharedModule} from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {
        path: '', component: WebsitesHome
    },
];

@NgModule({
    declarations: [
        WebsitesHome,
    ],
    entryComponents: [
      WebsitesHome,
    ],
    imports: [ 
        SharedModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class WebsitesModule {
}