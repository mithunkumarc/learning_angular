import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { ChildService } from './child.service';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let mockChildService: ChildService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      providers: [{
        provide: ChildService,
        useValue: jasmine.createSpyObj('ChildService', ['getSomeData'])
      }]
    })
    .compileComponents();
    mockChildService = TestBed.get(ChildService);                           // ask TestBed to give mockService
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('spyOn Example ', () => {
    spyOn(component,'getMePencil').and.returnValue("nataraj pencil");
    const result = component.getMePencil();
    expect(result).toEqual("nataraj pencil");
  });

  it("createSpy example ", () => {
    mockChildService['getSomeData'].and.returnValue("some");
    const result = mockChildService['getSomeData']();
    expect(result).toEqual("some");
    console.log(mockChildService); //check console : you can see object with function "getSomeData"
  })
  
});
