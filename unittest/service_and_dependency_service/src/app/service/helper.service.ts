import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class HelperService {
  
    constructor() { }

    getUtilData() {
        return "some util data";
    }
  
  }