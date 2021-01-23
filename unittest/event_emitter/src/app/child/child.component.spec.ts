import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test event emitter', () => {
    spyOn(component.messageEmitter,'emit');
    // trigger click
    
    /*
    // first approach : performing button click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector("button");
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    */

    // second : direct invoke method
    component['sendMessage']();
    expect(component.messageEmitter.emit).toHaveBeenCalledWith('send message');
  })
});
