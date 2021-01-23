1. import service class

2. in the TestBed Configuration, under provider mention service class.

            // inside beforeEach 
            TestBed.configureTestingModule({
              declarations: [ CalculatorComponent ],
              providers: [{                                                         // mention list of services needed
                provide: UtilService,
                useValue: jasmine.createSpyObj('UtilService', ['getData'])          // mention which are all methods you need to stub
             }],
            })
            .compileComponents();

3. ask TestBed to provide mock service instance

          mockUtilService = TestBed.get(UtilService);                           // ask TestBed to give mockService
          
4. in spec , you can stub method

          mockUtilService.getData.and.returnValue("special data");
          expect(component.getDataFromService()).toEqual("special data");

#### calculator.component.ts

        import { Component, OnInit } from '@angular/core';
        import { UtilService } from './../service/util.service';

        @Component({
          selector: 'app-calculator',
          templateUrl: './calculator.component.html',
          styleUrls: ['./calculator.component.css']
        })
        export class CalculatorComponent implements OnInit {

          constructor(public utilService: UtilService) { }

          public getDataFromService() {
            return this.utilService.getData();
          }
        }

#### calculator.component.spec.ts

        import { async, ComponentFixture, TestBed } from '@angular/core/testing';
        import { UtilService } from '../service/util.service';                      // import service 

        import { CalculatorComponent } from './calculator.component';

        describe('CalculatorComponent', () => {
          let component: CalculatorComponent;
          let fixture: ComponentFixture<CalculatorComponent>;
          let mockUtilService;

          beforeEach(async(() => {  
            TestBed.configureTestingModule({
              declarations: [ CalculatorComponent ],
              providers: [{                                                         // mention list of services needed
                provide: UtilService,
                useValue: jasmine.createSpyObj('UtilService', ['getData'])          // mention which are all methods you need to stub
             }],
            })
            .compileComponents();
          }));

          beforeEach(() => {
            console.log("second")
            fixture = TestBed.createComponent(CalculatorComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            mockUtilService = TestBed.get(UtilService);                           // ask TestBed to give mockService
          });


          it('test data from service', () => {
            mockUtilService.getData.and.returnValue("special data");
            expect(component.getDataFromService()).toEqual("special data");
          });
        });
