import { Component, ElementRef,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html'
})
export class LaptopComponent {
  @ViewChild('info', { read: ElementRef, static: false }) el: ElementRef;
  changeColor() {
    this.el.nativeElement.setAttribute('style','color:blue');
  }
}