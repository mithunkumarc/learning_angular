import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilService } from '../service/util.service';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let mockUtilService;
  beforeEach(async(() => {
    console.log("first")
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [{
        provide: UtilService,
        useValue: jasmine.createSpyObj('UtilService', ['getData'])
     }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    console.log("second")
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUtilService = TestBed.get(UtilService);
  });

  it('should create', () => {
    const result = component.add(4,6);
    expect(result).toBeGreaterThan(9);
  });

  it('testing addition : ', () => {
    const result = component.add(4,6);
    expect(result).toBeGreaterThan(9);
  });

  it('is isWorking is true', () => {
    const result = component.isWorking();
    expect(result).toBeTruthy();
  });

  xit('skip this test', () => {
    expect(true).toBe(false);
  });

  it('is title is defined', () => {
    expect(component.title).toBeDefined();
  });

  it('is color is undefined', () => {
    expect(component.color).toBeUndefined();
  });

  it('is brand is null', () => {
    expect(component.brand).toBeNull();
  })

  it('is model is NaN', () => {
    expect(component.model).toBeNaN();
  })

  it('test error thrown from method', () => {
    expect(() => component.solarCharging()).toThrow(new Error("battery damaged"));
  })

  it('test error message thrown from error', () => {
    expect(component.solarCharging).toThrowError("battery damaged");
  });

  it('test data from service', () => {
    mockUtilService.getData.and.returnValue("special data");
    expect(component.getDataFromService()).toEqual("special data");
  });
});
