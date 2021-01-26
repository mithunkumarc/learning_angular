import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsComponent } from './students.component';
import { StudentsService } from './students.service';
import { StudentsServiceStub } from './students.service.mock';
import { By } from '@angular/platform-browser';
import { throwError } from 'rxjs';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  //let mockStudentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [StudentsComponent],
      providers: [{ 
        provide: StudentsService, 
        useClass: StudentsServiceStub // important : service replaced with stub(responses mocked)
      }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('testing getStudentList :', () => {
    spyOn(component._studentsService, 'getStudentList').and.callThrough();//calls stubbed method
    component.ngOnInit();
    expect(component._studentsService.getStudentList).toHaveBeenCalled();
  });

  it('should render User List in HTML', () => {
    const ele = fixture.debugElement.query(By.css('.users-div')).nativeElement;
    // console.log(ele.childNodes[1].innerHTML)
    expect(ele.childNodes[1].innerHTML).not.toBeNull();
    expect(ele.childNodes[2].innerHTML).not.toBeNull();
    expect(ele.childNodes[3].innerHTML).not.toBeNull();
  });

  it('testing getStudentDetails : ', () => {
    spyOn(component._studentsService, 'getStudentDetails').and.callThrough();//calls stubbed method studentserviceStub
    component.getDetails(1);
    expect(component._studentsService.getStudentDetails).toHaveBeenCalledWith(1);//test whether method called with id 1
    //console.log(component.selected_student);
  })

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


});
