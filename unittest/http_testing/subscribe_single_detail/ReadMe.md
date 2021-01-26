#### this example includes testing student service functionality(http subscribing functionality)

#### student.service.spec.ts

          //prepare mock single student object : tranformedDummyUserDetails
          it('getStudentDetails: should return single student', () => {
              // setup subscribing to method : mock request and data in step 2
              service.getStudentDetails('1').subscribe((res) => {
                  expect(res).toEqual(tranformedDummyUserDetails);  // res here is mocked response setup in req.flust(data)
              })

              // mock request url : step 2
              const req = httpMock.expectOne('https://reqres.in/api/users/1');
              expect(req.request.method).toBe('GET');// test getStuDetails calling get request internally       
              // mock response data for subscriber part above
              req.flush(tranformedDummyUserDetails);  
          })  
