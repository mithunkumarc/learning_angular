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

  it('callThrough test ', () => {
    // calling actual implementation of getHelperData
    spyOn(component,'getHelperData').and.callThrough();
    const result = component.getData();
    expect(component.getHelperData).toHaveBeenCalled();
    expect(result).not.toBeNaN();
    console.log(result);
  });

  
});
