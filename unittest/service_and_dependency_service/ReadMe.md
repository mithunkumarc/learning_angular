#### testing UtilService method and UtilService has dependency service called HelperService. spy object for HelperService

#### utilservice.spec.ts

        import { TestBed, getTestBed } from '@angular/core/testing';
        import { HelperService } from './helper.service';
        import { UtilService } from './util.service';

        describe('UtilService', () => {
            let injector: TestBed;
            let service:  UtilService;
            let helperService; // for dependency service

            beforeEach(() => {

              const helperServiceSpy = jasmine.createSpyObj('HelperService', ['getUtilData']); // mention which method to stub

              TestBed.configureTestingModule({
                imports: [],                                                // libraries if needed      
                providers: [
                    UtilService,                                            // our main tobe tested service
                    { provide : HelperService, useValue: helperServiceSpy } // dependency service
                ],
              });

              injector = getTestBed();
              service = injector.get(UtilService);                                          // service instance  
              helperService = TestBed.get(HelperService) as jasmine.SpyObj<HelperService>;  // dependency service instance as spyobject
            });


            it('test getData() : should return "some data"', () => {
                const result = service.getData();
                expect(result).toEqual("some data");
            });

            it('test getHelperData(): should return "some util data"', () => {
              // stubbing getUtilData on spyObject
              helperService.getUtilData.and.returnValue("some util data");
              const result = service.getHelperData();
              expect(result).toEqual("some util data");
            });
          });
