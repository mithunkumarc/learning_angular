import { getTestBed, TestBed } from "@angular/core/testing"
import { StudentsService } from "./students.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const dummyUserListResponse = {
    data: [
      { id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
      { id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
      { id: 3, first_name: 'Emma', last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
      { id: 4, first_name: 'preethi', last_name: 'mk', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
    ],
  };

const tranformedDummyUserDetails = {
    data: {
        id: 1,
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
        university: 'MIT',
    },
};

xdescribe('students service', () => {
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
        // setup subscribe list
        service.getStudentList().subscribe((res) => {            
            expect(res).toEqual(dummyUserListResponse);
        })

        // mock request url
        const req = httpMock.expectOne('https://reqres.in/api/users');        
        expect(req.request.method).toBe('GET'); // test http req in getStudentList is get
        // mock response data
        req.flush(dummyUserListResponse); // dummy response
    })

    it('getStudentDetails: should return single student', () => {
        // setup subscribing to method : mock request and data in step 2
        service.getStudentDetails('1').subscribe((res) => {
            expect(res).toEqual(tranformedDummyUserDetails);
        })

        // mock request url : step 2
        const req = httpMock.expectOne('https://reqres.in/api/users/1');
        expect(req.request.method).toBe('GET');// test getStuDetails calling get request internally       
        // mock response data for subscriber part above
        req.flush(tranformedDummyUserDetails);
    })  
})