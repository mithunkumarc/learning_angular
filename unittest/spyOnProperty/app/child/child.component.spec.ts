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

  it('spyOnProperty getter test ', () => {    
    spyOnProperty(component,'name','get').and.returnValues("rajat");
    const result = component.getData();
    expect(result).toEqual('rajat');
  });

  it('another alternative getter test ', () => {
    component.name = "rajat";
    expect(component.getData()).toEqual("rajat");

  })

  it('spyOnProperty setter test', () => {
    const nameSetter = spyOnProperty(component,'name','set');
    component.name = "rajat";
    expect(nameSetter).toHaveBeenCalledWith('rajat');
  })

  
});
