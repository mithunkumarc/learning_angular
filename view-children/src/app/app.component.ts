import { Component , ViewChildren , QueryList , ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  itemList = [
                {"Id":1,"Name":"Item1","Count":1},
                {"Id":2,"Name":"Item2","Count":2},
                {"Id":3,"Name":"Item3","Count":3}
              ];
  @ViewChildren("inputText") inputText : QueryList<any>;
  @ViewChildren("inputButton") inputButton : QueryList<any>;

    constructor() { }

    ngOnInit() {
    }

    getValue(event,index) {        
        var textInputs = this.inputText.toArray();
        var inputButtons = this.inputButton.toArray();
        console.log(textInputs[index].nativeElement.value);
    }

    checkvalue(event,index){
      console.log('check value : ',event.target.value,':',index);
    }

    playerName = "yaru illa";

    readValue(){
      console.log("read playerName here : ",this.playerName);
    }
}
