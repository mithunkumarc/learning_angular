#### parent component

        import { Component, OnInit } from '@angular/core';
        import { Message } from '../studentproject/studentproject.component';

        @Component({
          selector: 'student-form',
          templateUrl: './student.component.html',
          styleUrls: ['./student.component.css'],
        })
        export class StudentComponent {
          project_title = 'Flower Show';

          getData(data: Message) {
            console.log("message received in student")
            console.log(data.messageId);
            console.log(data.message);
          }

        }


#### parent component html, title property as input , sendData eventEmitter as output

        <student-project [title] = 'project_title' (sendData) = 'getData($event)'></student-project>



#### child component 

        import { Component, Input, Output, EventEmitter } from '@angular/core';

        export interface Message {
            messageId: number;
            message: string;
        }

        @Component({
            selector: 'student-project',
            templateUrl: './studentproject.component.html',
            styleUrls: ['./studentproject.component.css'],
        })
        export class StudentProjectComponent {
            @Input()
            title: string;
            constructor() { }
            @Output()
            sendData: EventEmitter<Message> = new EventEmitter();

            senddata() {
                console.log('sendata : ');
                this.sendData.emit({ messageId: 1, message: "hello world" });
            }

        }


#### child component html

        <p>{{title}}</p>
        <button (click)="senddata()">click me</button>
        
        
#### stackblitz example for input

https://stackblitz.com/edit/ma-input-example  

when you are sending from parent to child component, use [] to send value to child component.
