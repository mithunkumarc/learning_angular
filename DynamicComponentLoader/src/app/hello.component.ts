import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'hello-en',
  template: `<h1>English {{name}}!</h1>`
})
export class HelloEnComponent implements OnDestroy {
  @Input() name: string;
  ngOnDestroy() {
    console.log("hello en com destroy");
  }
}

@Component({
  selector: 'hello-kn',
  template: `<h1>ಕನ್ನಡ {{name}}!</h1>`
})
export class HelloKnComponent implements OnDestroy {
  @Input() name: string;
  ngOnDestroy() {
    console.log("hello tw com destroy");
  }
}
