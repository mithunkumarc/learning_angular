import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users: User[]= [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(){
     this.userService.getContacts().subscribe(
       (data: any)=>{
                      // console.log(data.filter(u => u.id < 20));
                      this.users = data.filter(u => u.id < 10);
                    }
      );  
  }

}
