#### flushMicrotask cannot be used with setTimout, tick is preffered to use with setTimeout

#### tick works with both microtask and macrotask.

child.component.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'app-child',
          templateUrl: './child.component.html',
          styleUrls: ['./child.component.css']
        })
        export class ChildComponent{
          flag = false;
          async getData() {
            // setTimout is a macrotask, so use tick to elapse time forcefully
            // using flushMicrotask, has no effect on setTimeout,
            // because setTimout is a a macrotask
            setTimeout(() => {
              this.flag = true;
            }, 100)
          }
        }


child.component.spec.ts


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

          it("async function test using tick ",fakeAsync(() => {
            component.getData();
            expect(component.flag).toBeFalsy(); // passes,still flag is false
            tick(50); // forcing setTimeout to elapse 50ms
            expect(component.flag).toBeFalsy(); // passes,still flag is false
            flushMicrotasks(); // forcing setTimeout to elapse time (but doesn't works)
            expect(component.flag).toBeTruthy(); // fails, flushMicrotask has no effect on macrotask
          }));
        });
