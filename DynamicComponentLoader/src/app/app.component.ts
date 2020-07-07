import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { HelloEnComponent, HelloKnComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dynamicComponent: any;
  toggle: boolean = false;

  @ViewChild('sample', {  
        read: ViewContainerRef  
    }) sample: ViewContainerRef; 

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    console.log("constructor : ",this.sample); // undefined
    // ViewContainerRef not yet available here 
    // cannot load component here
    // views are not loaded
  }

  ngOnInit() {
    // default entry component
    this.dynamicComponent = HelloEnComponent;
    // ViewContainerRef available here
    // good to load component here
    this.loadComponent();
  }

  loadComponent() {
    // factory object
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponent);
    // clear old component
    this.sample.clear();
    // component reference, which creates component
    let cmpRef = this.sample.createComponent(componentFactory);
    // initialize property, both as name property
    let comp = cmpRef.instance as HelloEnComponent | HelloKnComponent;
    // where name is Input property
    comp.name = "welcome"; 
  }
  
  changeComp() {
    if (this.toggle) {
        this.dynamicComponent = HelloEnComponent;
      } else {
        this.dynamicComponent = HelloKnComponent;
      }
      this.loadComponent();
    this.toggle = !this.toggle;
  }
}
