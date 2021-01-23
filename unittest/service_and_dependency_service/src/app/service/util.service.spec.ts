import { TestBed, getTestBed } from '@angular/core/testing';
import { HelperService } from './helper.service';
import { UtilService } from './util.service';

describe('UtilService', () => {
    let injector: TestBed;
    let service:  UtilService;   
    let helperService; // for dependency service
  
    beforeEach(() => {

      const helperServiceSpy = jasmine.createSpyObj('HelperService', ['getUtilData']);
  
      TestBed.configureTestingModule({
        imports: [],
        providers: [
            UtilService,
            { provide : HelperService, useValue: helperServiceSpy } // needed if our service has dependency
        ],
      });
  
      injector = getTestBed();
      service = injector.get(UtilService);
      helperService = TestBed.get(HelperService) as jasmine.SpyObj<HelperService>; // dependency
    });
  

    it('test getData() : should return "some data"', () => {
        const result = service.getData();
        expect(result).toEqual("some data");
    });

    it('test getHelperData(): should return "some util data"', () => {
      // stubbing getUtilData
      helperService.getUtilData.and.returnValue("some util data");
      const result = service.getHelperData();
      expect(result).toEqual("some util data");
    });
  });