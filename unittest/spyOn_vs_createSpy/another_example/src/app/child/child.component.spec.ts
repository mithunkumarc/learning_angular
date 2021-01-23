import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('test whether getHelperDat is called ', () => {
    const spy = spyOn(component,'getHelperData');
    const result = component.getData("hello");
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("hello");
    console.log(result);// undefined : because getHelperData is stubbed
  });

  
});
