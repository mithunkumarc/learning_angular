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
    component.getHelperData("helloboss");
    const result = component.getData();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("helloboss");
    console.log(result);// undefined : because getHelperData is stubbed
  });

  
});
