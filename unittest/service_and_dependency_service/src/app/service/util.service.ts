import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
    providedIn: 'root',
  })
  export class UtilService {
  
    constructor(public helperService: HelperService) { }

    getData() {
        return "some data";
    }
  
    getHelperData() {
        return this.helperService.getUtilData();
    }
  }