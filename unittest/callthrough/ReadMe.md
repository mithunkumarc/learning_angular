1. One of the great things about Jasmine, the Javascript unit testing library, is the spy. 
2. A spy lets you peek into the workings of the methods of Javascript objects. 
3. Just don't forget to use callThrough() when you don't want to alter how the spied-upon function behaves. 
4. That's because a spy automatically replaces the spied function with a stub. 
5. If you want the spied-upon function to be called normally, add .and.callThrough() to your spy statement.


callThrough allow to call original implementation of function whose object is being spied.
you can test original implemenatation of function.


example : 

        // inside spec
        // getHelperData function exist inside getData, we dont want to stub response
        spyOn(component,'getHelperData').and.callThrough(); 
        // getData calls getHelperData, original implementation of getHelperData is called
        const result = component.getData();      
        // verify
        expect(component.getHelperData).toHaveBeenCalled(); 
        // expecting a number
        expect(result).not.toBeNaN();                       
