1. jasmine.createSpy can be used when there is no function to spy on. It will track calls and arguments like a spyOn but there is no implementation.

2. jasmine.createSpyObj is used to create a mock that will spy on one or more methods. It returns an object that has a property for each string that is a spy.

3. If you want to create a mock you should use jasmine.createSpyObj. 

4. spyOn can be used to call original method.

createSpy : mock (non existant ) method and its return value  
spyOn : calls original implementation of method( if you don't stub)  

#### createSpy : 

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ChildComponent ],
          providers: [{
            provide: ChildService,
            // getSomeData doesn't exists, but sill we can mock and stub
            useValue: jasmine.createSpyObj('ChildService', ['getSomeData'])  
          }]
        })
        .compileComponents();
        mockChildService = TestBed.get(ChildService);                   // ask TestBed to give mockService
      }));

    //in spec : 
    mockChildService['getSomeData'].and.returnValue("some");
    const result = mockChildService['getSomeData']();
    expect(result).toEqual("some");



#### spyOn example : used to stub existing method (getMePencil exists on component)

    spyOn(component,'getMePencil').and.returnValue("nataraj pencil");
    const result = component.getMePencil();
    expect(result).toEqual("nataraj pencil");



read : [html goodies](https://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html#:~:text=In%20Jasmine%2C%20mocks%20are%20referred,object%2C%20methodName%20where%20object.)
