#### summary: student component subscribed to service method to get list of students
#### this example includes testing student service function(http subscribing functionality)


#### student.service.ts

        import { getTestBed, TestBed } from "@angular/core/testing"
        import { StudentsService } from "./students.service";
        import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

        // mock response data
        const dummyUserListResponse = {
            data: [
              { id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
              { id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
              { id: 3, first_name: 'Emma', last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
            ],
          };


        describe('students service', () => {
            let injector: TestBed;
            let service: StudentsService;
            let httpMock: HttpTestingController;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [HttpClientTestingModule],
                    providers: [StudentsService]
                })

                injector = getTestBed();
                service = injector.get(StudentsService);
                httpMock = injector.get(HttpTestingController);

            })

            afterEach(() => {
                httpMock.verify();
            })


            it('getStudentList() should return data', () => {
                // setup: subscribe to service getStudentList
                // mock response added in req.flust(dummyUserListResponse) 
                service.getStudentList().subscribe((res) => {            
                    expect(res).toEqual(dummyUserListResponse);
                })

                // mock request url
                const req = httpMock.expectOne('https://reqres.in/api/users');        
                expect(req.request.method).toBe('GET'); // test http req in getStudentList is get
                // mock response data
                req.flush(dummyUserListResponse); // add dummy response to request
            })
        })
        

#### note : testing subscribe method, below 2 steps belong to same spec it()

#### step 1 : subscribe to method, setup mock request and data in step 2

        // setup: subscribe to service getStudentList
        // mock response added in req.flust(dummyUserListResponse) 
        service.getStudentList().subscribe((res) => {            
            expect(res).toEqual(dummyUserListResponse);
        })

#### step 2 : setting up request and mock response for step 1

        // mock request url
        const req = httpMock.expectOne('https://reqres.in/api/users');        
        expect(req.request.method).toBe('GET'); // test http req in getStudentList is get
        // mock response data
        req.flush(dummyUserListResponse); // add dummy response to request
