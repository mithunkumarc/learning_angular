import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SharedModule } from "../shared/shared.module";

const appRoutes: Route[] = [
  {
    path: "websites",
    loadChildren: "../websites/websites.module#WebsitesModule"
  },
  {
    path: "dashboard",
    loadChildren: "../dashboard/dashboard.module#DashboardModule"
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
