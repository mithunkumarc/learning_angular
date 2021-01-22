#### For TestBed configure and creating component go with beforeEach 

Before All : 

        if you (TestBed) configure and create component in before All
        1. component created only once.
        2. drawback  : if component has state that gets modified, it would affect next unittestcases
            solution : use BeforeEach
            
example : 

      export class CalculatorComponent implements OnInit {
        count = 1;
        constructor() { }

        ngOnInit() {
        }

        // below function modify state, so it is better to teared down and recreate new component instance
        public add(a: number, b: number): number {
          this.count++;   
          return a + b;
        }

      }


Before Each : 

        if you (TestBed) configure and create component in before Each : 
        drawback : for every test component gets tearedown and recreated, but sometimes it is necessary to test all unitest cases
        advantage : component states resets to default values
