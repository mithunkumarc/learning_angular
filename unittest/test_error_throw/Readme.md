source : 

        export class CalculatorComponent{

          public solarCharging(): any{
            throw new Error("battery damaged");
          }
        }

testing method throwing error : don't call the function, just mention function name

        describe('test suite', () => {
          it('test error thrown from method', () => {
            expect(component.solarCharging).toThrow(new Error("battery damaged"));
          })
        });
