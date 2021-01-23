1. jasmine.createSpy can be used when there is no function to spy on. It will track calls and arguments like a spyOn but there is no implementation.

2. jasmine.createSpyObj is used to create a mock that will spy on one or more methods. It returns an object that has a property for each string that is a spy.

3. If you want to create a mock you should use jasmine.createSpyObj. 

4. spyOn can be used to call original method.

createSpy : mock method and its return value  
spyOn : calls original implementation of method( if you don't stub)  

createSpy : 



spyOn example : used to stub existing method (getMePencil exists on component)

    spyOn(component,'getMePencil').and.returnValue("nataraj pencil");
    const result = component.getMePencil();
    expect(result).toEqual("nataraj pencil");
