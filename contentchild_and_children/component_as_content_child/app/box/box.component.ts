import { Component, ContentChild } from '@angular/core';
import { LaptopComponent } from '../laptop/laptop.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  /*
    laptop component accessed as content ContentChild, sytax similar to viewchild
   */
  @ContentChild('laptopref') laptopComp: LaptopComponent;
  changeColor() {
    this.laptopComp.changeColor();
  }
}