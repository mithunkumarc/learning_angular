import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './app.component.ts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }

  public getContacts(){   
      return this.httpClient.get<User[]>(this.url);
  }
}