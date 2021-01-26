import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { StudentsService } from './students.service';
import { StudentsServiceStub } from './students.service.mock';

xdescribe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsComponent ],
      providers: [{ provide: StudentsService, useClass: StudentsServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
