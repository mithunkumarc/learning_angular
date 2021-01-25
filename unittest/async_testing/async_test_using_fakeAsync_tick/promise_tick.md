#### tick works with promise too, so tick works with setTimout(macrotask) and promise(microtask)
#### tick recommended then
#### microtask : js related, macrotask : browser related
#### microtask : immediately executed after caller/who called completes its job, macrotask gets executed when all microtask completed

#### child.component.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'app-child',
          templateUrl: './child.component.html',
          styleUrls: ['./child.component.css']
        })
        export class ChildComponent{
          flag = false;
          async getData() {
            Promise.resolve(true).then((result) => {
              this.flag = true;
            })
          }
        }


#### child.component.spec.ts

        import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
        import { ChildComponent } from './child.component';

        describe('ChildComponent', () => {
          let component: ChildComponent;
          let fixture: ComponentFixture<ChildComponent>;

          beforeEach(async(() => {
            TestBed.configureTestingModule({
              declarations: [ ChildComponent ],
            })
            .compileComponents();
          }));

          beforeEach(() => {
            fixture = TestBed.createComponent(ChildComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
          });

          it("async function(promise) test using tick ",fakeAsync(() => {
            component.getData();
            expect(component.flag).toBeFalsy(); //pass, still flag is false
            tick(); // force promise to complete job
            expect(component.flag).toBeTruthy(); // pass, flushMicrotask works with promise(microtask)
          }));
        });
