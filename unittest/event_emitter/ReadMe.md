1. spy on emit function on messageEmitter

        spyOn(component.messageEmitter,'emit');

2. trigger emit

3. verfiy  

Note : app component spec need child compoent as dependency as it is being used as child component

#### child.component.html

      <button (click)="sendMessage()">send data</button>

#### child.component.ts

      export class ChildComponent implements OnInit {

        @Output()
        messageEmitter: EventEmitter<string> = new EventEmitter();

        private sendMessage() {
          this.messageEmitter.emit("send message");
          console.log("send message");
        }
      }

#### app.component.html

        <app-child (messageEmitter)="receiveMessage($event)"></app-child>

#### app.component.ts

      export class AppComponent {

        receiveMessage(event){
          console.log("inside app component : ", event);
        }
      }

#### testing : child.component.spec.ts

        import { async, ComponentFixture, TestBed } from '@angular/core/testing';
        import { ChildComponent } from './child.component';

        describe('ChildComponent', () => {
          let component: ChildComponent;
          let fixture: ComponentFixture<ChildComponent>;

          beforeEach(async(() => {
            TestBed.configureTestingModule({
              declarations: [ ChildComponent ]
            })
            .compileComponents();
          }));

          beforeEach(() => {
            fixture = TestBed.createComponent(ChildComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
          });

          it('test event emitter', () => {
            spyOn(component.messageEmitter,'emit'); (1)            

            /* (2)
            // first approach : performing button click/// trigger click
            const nativeElement = fixture.nativeElement;
            const button = nativeElement.querySelector("button");
            button.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            */

            // second : direct invoke method
            component['sendMessage']();
            expect(component.messageEmitter.emit).toHaveBeenCalledWith('send message'); // (3)
          })
        });

#### source : https://stackoverflow.com/questions/35319476/any-way-to-test-eventemitter-in-angular2/46730265
