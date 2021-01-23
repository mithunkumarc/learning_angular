TestBed for Service and Component is different


assume examples inside a suite(describe)

1. component
    
        let component: CalculatorComponent; // main component tobe tested
        let fixture: ComponentFixture<CalculatorComponent>;
        let mockUtilService;  // dependency
        beforeEach(async(() => {
        
          TestBed.configureTestingModule({
            declarations: [ CalculatorComponent ],                  // other dependent component can be mentioned here
            providers: [{
              provide: UtilService,                                 // service depencies
              useValue: jasmine.createSpyObj('UtilService', ['getData'])    // spyobject for service
           }],
          })
          .compileComponents();
        }));

        beforeEach(() => {          
          fixture = TestBed.createComponent(CalculatorComponent);       
          component = fixture.componentInstance;                    // main component instance
          fixture.detectChanges();
          mockUtilService = TestBed.get(UtilService);               // get service instance as spyObject
        });

2. service


        let injector: TestBed;
        let service:  UtilService;   
        let helperService; // for dependency service

        beforeEach(() => {

          const helperServiceSpy = jasmine.createSpyObj('HelperService', ['getUtilData']);

          TestBed.configureTestingModule({
            imports: [],
            providers: [
                UtilService,      // our main service to be tested
                { provide : HelperService, useValue: helperServiceSpy } // needed if our service has dependency
            ],
          });

          injector = getTestBed();  
          // main service instance
          service = injector.get(UtilService);              
          // dependency instance as spyObject(can be stubbed
          helperService = TestBed.get(HelperService) as jasmine.SpyObj<HelperService>; 
        });
