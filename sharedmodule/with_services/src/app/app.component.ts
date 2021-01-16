import { Component } from "@angular/core";
import { MyService } from "./../shared/myservice.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  constructor(myservice: MyService) {
    myservice.increment();
  }
}
