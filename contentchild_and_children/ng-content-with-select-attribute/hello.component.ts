import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
      <ng-content select=".title" ></ng-content>
      <h3>some content</h3>
      <ng-content select=".contact" ></ng-content> 
      <button (click)="changeColor()">change button text color</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  /* accessing content child using template reference */
  @ContentChild('info') cc: ElementRef;
  @ContentChild('contactinfo') ci: ElementRef;
  
  changeColor(){
    // use rederer2: xss attack : nativelement
    this.cc.nativeElement.setAttribute('style', 'color: red');
    this.ci.nativeElement.setAttribute('style', 'color: blue');
  }

  /*
    select tag uses class/id value to refer 
    cotent projection.
  */
}
