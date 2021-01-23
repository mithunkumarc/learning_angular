import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class UtilService {
  
    constructor() { }

    getData() {
        return "some data";
    }
  
  }