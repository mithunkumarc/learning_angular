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

  it('callFake test ', () => {
    // faking getHelperData with another function
    // when getHelperData is called from getData, 0.4 value returned
    spyOn(component,'getHelperData').and.callFake(() => 0.4);
    const result = component.getData();
    expect(component.getHelperData).toHaveBeenCalled(); // check whether getHelperData is called
    expect(result).not.toBeNaN(); // expecting number
    console.log(result); // 0.4
  });

  
});
