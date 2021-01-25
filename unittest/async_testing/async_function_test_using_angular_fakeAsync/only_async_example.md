child.component.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'app-child',
          templateUrl: './child.component.html',
          styleUrls: ['./child.component.css']
        })
        export class ChildComponent{

          async getData(key: boolean) {
            // async functions returns promise
            if(key){
              return "task done";
            } else {
              throw new Error("something went wrong");
            }    
          }
        }

child.component.spec.ts

          import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
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

            it('testing getData() using fakeAsync', fakeAsync (() => {
              const promiseObject = component.getData(true);
              promiseObject.then((result) => {
                expect(result).toEqual("task done");
              })
            }));

            it('testing getData() using fakeAsync: catch error', fakeAsync(() => {
              const promiseObject = component.getData(false);
              promiseObject.then((result) => {
                expect(result).toEqual("task done");      
              }).catch(error => {
                expect(error).toEqual(new Error("something went wrong"));
              })
            }))
          });
