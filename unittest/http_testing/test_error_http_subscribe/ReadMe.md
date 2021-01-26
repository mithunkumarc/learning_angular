#### when student details is search which doesn't exist, error thrown
#### student component testing student service method getStudentDetails

        // testing error thrown
          it('handling getStudentDetails error ', () => {
            expect(component.err_msg).toBeUndefined(); // err_msg has no value yet
            // stubbing error throw
            spyOn(component._studentsService,'getStudentDetails').and.returnValue(throwError('error'));
            // click on first student
            const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
            ele.click();
            // test error message
            expect(component.err_msg).toBe('Error while loading user details');
          })
