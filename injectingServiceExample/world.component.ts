import { Component, Injectable, Injector } from '@angular/core';
import { ServiceInjectorS } from './service.injector';

@Component({
    selector: 'world-app', 
    template: '<h1>{{ text }}</h1>',
    // providers: [ServiceInjectorS]
}) export class WorldComponent {
    text;

    //constructor(private injector: Injector) {}
    constructor(private serviceInjector: ServiceInjectorS){
    }

    ngOnInit() {
        //let newService = this.injector.get(ServiceInjectorS);
        let newService = this.serviceInjector;
        this.text = newService.message;
        console.log("world comp : ",this.text)
    } 
}