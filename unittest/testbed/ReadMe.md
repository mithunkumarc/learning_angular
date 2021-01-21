#### required to create mock instance of component tobe tested

TestBed is the primary api for writing unit tests for Angular applications and libraries.  

Note: Use TestBed in tests. It will be set to either TestBedViewEngine or TestBedRender3 according to the compiler used.

1. configure

        let component: CalculatorComponent;
        let fixture: ComponentFixture<CalculatorComponent>;

        TestBed.configureTestingModule({
            declarations: [ CalculatorComponent ]   // declare any other component/directive/service used in this component
          })
          .compileComponents();


2. create instance


        fixture = TestBed.createComponent(CalculatorComponent);
        component = fixture.componentInstance;
