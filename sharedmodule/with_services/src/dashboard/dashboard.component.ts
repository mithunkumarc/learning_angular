import { Component } from "@angular/core";
import { MyService } from "./../shared/myservice.service";

@Component({
  selector: "dashboard-home",
  template:
    '<div test-directive>Dashboard</div><button routerLink="">Home</button>'
})
export class DashboardHome {
  constructor(myservice: MyService) {
    myservice.increment();
  }
}
