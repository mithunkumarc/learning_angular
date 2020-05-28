import { Component, Injectable, Injector } from '@angular/core';
import { ServiceInjectorS } from './service.injector';

@Component({
    selector: 'hello-app', 
    template: '<h1>{{ text }}</h1>',
    // providers: [ ServiceInjectorS ]
}) export class HelloComponent {
    text;

    //constructor(private injector: Injector) {}
    constructor(private serviceInjector: ServiceInjectorS){}
    ngOnInit() {
        //let newService = this.injector.get(ServiceInjectorS);
        let newService = this.serviceInjector;
        this.text = newService.message;
        console.log("inside hello comp : ",this.text)
    } 
}