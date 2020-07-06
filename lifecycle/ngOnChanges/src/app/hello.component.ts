import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>
                current value {{name}}!
                <br />
                prev value : {{previousValue}}
            </h3>`
})
export class HelloComponent  {
  @Input() name: string;
   previousValue: string = "";
   constructor(){}

   ngOnChanges(changes: SimpleChanges) {
    this.previousValue = changes.name.previousValue;
    console.log("Child hello comp onchanges called");
  }
  
}
