#### flushMicrotask can be used with Promise since promise is also microtask

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

          it("async function test using flushmicrotask ",fakeAsync(() => {
            component.getData();
            expect(component.flag).toBeFalsy(); //pass, still flag is false
            flushMicrotasks(); // force promise to complete job
            expect(component.flag).toBeTruthy(); // pass, flushMicrotask works with promise(microtask)
          }));
        });
