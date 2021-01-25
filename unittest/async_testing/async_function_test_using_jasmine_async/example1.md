> jasmine async functions supports ajax call  
> angular 8, jasmine 3.4


1. child.component.ts

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

2. child.component.spec.ts

        import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

          it('getData() : async function test using await', async function() {
            const result = await component.getData(true);
            expect(result).toEqual("task done");
          });

          it('getData() : async function test using promise', () => {
            return component.getData(true).then(result => {
              expect(result).toEqual("task done");
            })
          });

          // handling error
          it('getData() : async function test using promise : catch error', function() {
            return component.getData(false).then(result => {
              expect(result).toEqual("task done");
            }).catch(result => {
              expect(result).toEqual(new Error("something went wrong"));
            })
          })
        });
