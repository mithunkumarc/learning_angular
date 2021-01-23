Calculator component using helper component as child component(selector using in calcualtor(html/template))

mention HelperComponent in TestBed configure declarations


describe('CalculatorComponent', () => {
  
      let component: CalculatorComponent;
      let fixture: ComponentFixture<CalculatorComponent>;
      let mockUtilService;
      beforeEach(async(() => {
        console.log("first")
        TestBed.configureTestingModule({
          declarations: [ CalculatorComponent, HelperComponent ],      // mention dependency here
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

      //specs here 
}  
