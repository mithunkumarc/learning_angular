import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
