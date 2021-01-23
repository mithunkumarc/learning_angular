
this example is about spyOn : 


        it('test whether getHelperDat is called ', () => {
          const spy = spyOn(component,'getHelperData');
          const result = component.getData("hello"); // internally calls getHelperData
          expect(spy).toHaveBeenCalled();
          expect(spy).toHaveBeenCalledWith("hello");
          console.log(result);// undefined : because getHelperData is stubbed
        });
