import { Component, Input } from "@angular/core";
import { MyService } from "./../shared/myservice.service";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  constructor(myservice: MyService) {}
}
