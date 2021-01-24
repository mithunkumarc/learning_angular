returnValues : 
1. function can be stubbed with multiple response, each response return will be returned in mentioned order.
2. if you call stubbed function more than times you response mentioned, undefined will be returned


        it('returnValues test ', () => {
            // getHelperData function call is inside getData
            // when getData is called getHelperData too called
            // getHelperData is stubbed with multiple return values
            spyOn(component,'getHelperData').and.returnValues(0.4,0.5,0.6);
            let result = component.getData();
            expect(result).toEqual(0.4);
            result = component.getData();
            expect(result).toEqual(0.5);
            result = component.getData();
            expect(result).toEqual(0.6);
            result = component.getData();
            expect(result).toBeUndefined();
          });
