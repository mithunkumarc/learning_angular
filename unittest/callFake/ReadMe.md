callFake takes a function as a parameter. This allows you to fake the method call and return a value of your desire.  

in stub, you just mock response. but in callFake you provide implementation for fakeFunction/call.  


         it('callFake test ', () => {
            // faking getHelperData with another function
            // when getHelperData is called from getData, 0.4 value returned
            spyOn(component,'getHelperData').and.callFake(() => 0.4); // fake function provided as parameter to callFake
            const result = component.getData();
            expect(component.getHelperData).toHaveBeenCalled(); // check whether getHelperData is called
            expect(result).not.toBeNaN(); // expecting number
            console.log(result); // 0.4
          });

#### callFake vs spyOn stub

callFake : fake function provided with implementation
         
         spyOn(component,'getHelperData').and.callFake(() => 0.4);

spyOn stub : just return value is mocked without executing any logic

         spyOn(component,'getHelperData').and.returnValue(0.4);
