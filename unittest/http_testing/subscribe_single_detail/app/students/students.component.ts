import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students_list = [];
  err_msg: string;
  selected_student = {
    first_name: '',
    last_name: ''
  }
  fee = 0;

  constructor(public _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getStudentList().subscribe(
      (res) => {
        this.students_list = res.data;
      }, (err) => {
        this.err_msg = 'Error while loading user list';
      }
    )
  }

  getDetails(id: number): void {
    this._studentsService.getStudentDetails(id).subscribe(
      (res) => {
        this.selected_student = res['data'];
        this.fee = this.getFeePaid(id);
      },(err) => {
        this.err_msg = 'Error while loading user details';
      }
    )
  }

  getFeePaid(id: number):number {
    return id * 1000;
  }

}
