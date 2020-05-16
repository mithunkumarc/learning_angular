#### parent component : studentcomponent :

          import { Component, OnInit, ViewChild, AfterViewInit, Output, ViewChildren, QueryList } from '@angular/core';
          import { StudentProjectComponent } from '../studentproject/studentproject.component';

          export interface Student {
            name: string;
            projectName: string;
            awardsList: string[];
          }

          @Component({
            selector: 'student-form',
            templateUrl: './student.component.html',
            styleUrls: ['./student.component.css'],
          })
          export class StudentComponent implements AfterViewInit {
            //access all child components of type StudentProjectComponent
            @ViewChildren(StudentProjectComponent)
            studentsProjectComponent: QueryList<any>;

            //sending student list to child component
            studentList: Student[] = [
              { name: "atul", projectName: "birds", awardsList: ["one", "two"] },
              { name: "manjunath", projectName: "flowers", awardsList: ["three", "two"] },
              { name: "prashanth", projectName: "insects", awardsList: ["one", "three"] }
            ]

            ngAfterViewInit() {
              console.log("query list : ", this.studentsProjectComponent);
            }

            onSelectStudent(student: Student) {
              console.log("selected student : ", student);
            }

          }


#### studentcomponent html

            <!-- 
              studentList looping
              [student] : each student sending to child component
              (selectedStudent) : eventEmitter from chilcomponent which emit selected student
              onSelectStudent : function defined in parent comp(studentcomp) $event : carries data(student)
            -->
            <ul>
              <li *ngFor="let student of studentList">
                <student-project 
                    [student]="student"
                    (selectedStudent) ="onSelectStudent($event)"
                    ></student-project>
                </li>
            </ul>
            
            
            
#### studentProjectComp : child component 

              import { Component, Input, Output, EventEmitter } from '@angular/core';
              import { Student } from '../student/student.component';

              @Component({
                  selector: 'student-project',
                  templateUrl: './studentproject.component.html',
                  styleUrls: ['./studentproject.component.css'],
              })
              export class StudentProjectComponent {
                  @Input()
                  student: Student;
                  @Output()
                  selectedStudent: EventEmitter<Student> = new EventEmitter();

                  onSelect() {
                      this.selectedStudent.emit(this.student);
                  }

              }



#### studentprojectcomp html file

              <mat-card>
                  <mat-card-header>
                    <mat-card-title>{{student.name}}</mat-card-title>
                    <mat-card-subtitle>{{projectName}}</mat-card-subtitle>
                  </mat-card-header>

                  <mat-card-content>
                    <ul>
                      <li *ngFor="let award of student.awardsList">
                          {{award}}
                      </li>
                    </ul>
                  </mat-card-content>
                  <mat-card-actions>
                    <button senddata mat-button type="button" (click)="onSelect()" class="btn btn-primary">Send</button>
                    <!-- <button mat-button>SHARE</button> -->
                  </mat-card-actions>
                </mat-card>

