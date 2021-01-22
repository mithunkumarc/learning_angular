#### testing error throw

source : 

        export class CalculatorComponent{

          public solarCharging(): any{
            throw new Error("battery damaged");
          }
        }

1. solution : testing method throwing error : don't call the function, just mention function name

        describe('test suite', () => {
          it('test error thrown from method', () => {
            expect(component.solarCharging).toThrow(new Error("battery damaged"));
          })
        });

2. solution  :embed in arrow funtion

        it('test error thrown from method', () => {
            expect(() => component.solarCharging()).toThrow(new Error("battery damaged"));
          })


#### testing error message : test whether error throwing specific message or not

method : 

        export class CalculatorComponent{

          public solarCharging(): any{
            throw new Error("battery damaged");
          }
        }


spec : 

        it('test error message thrown from error', () => {
            expect(component.solarCharging).toThrowError("battery damaged");
          })
