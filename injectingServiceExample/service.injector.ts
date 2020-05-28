import { Component, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceInjectorS {
    message = 'I Injector';
    constructor(){
      console.log('service injector constructor');
    }
}