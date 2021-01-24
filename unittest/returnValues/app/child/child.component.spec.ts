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

  it('returnValues test ', () => {
    // getHelperData function call is inside getData
    // when getData is called getHelperData too called
    // getHelperData is stubbed with multiple return values
    spyOn(component,'getHelperData').and.returnValues(0.4,0.5,0.6);
    let result = component.getData();
    expect(result).toEqual(0.4);
    result = component.getData();
    expect(result).toEqual(0.5);
    result = component.getData();
    expect(result).toEqual(0.6);
    result = component.getData();
    expect(result).toBeUndefined();
  });

  
});
