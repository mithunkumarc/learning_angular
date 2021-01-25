#### use tick(milliseconds) to force setTimeout to elapse time

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
            setTimeout(() => {
              this.flag = true;
            }, 100) // 100ms
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
            tick(50); // forcing setTimeout 50ms elapse in time 
            expect(component.flag).toBeFalsy(); // pass, still flag is false
            tick(50); // forcing setTimeout 50ms elapse in time
            expect(component.flag).toBeTruthy(); // pass, flag is true now
          }));
        });
