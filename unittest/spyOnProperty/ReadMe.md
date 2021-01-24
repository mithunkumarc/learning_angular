child component : 

        export class ChildComponent{
          private _name: string;

          set name(data: string) {
            this._name = data;
          }
          get name() {
            return this._name;
          }

          getData() {
            return this.name;
          }
        }

#### spec : 

        it('spyOnProperty test ', () => {    
            spyOnProperty(component,'name','get').and.returnValues("rajat");
            const result = component.getData();
            expect(result).toEqual('rajat');
          });

#### javscript example : 

        const foop = {
            get value() {},
            set value(v) {}
        };

        it('can spy on getter', () => {
            spyOnProperty(foop, 'value', 'get').and.returnValue(1);
            expect(foop.value).toBe(1);
        });

        it('and on setters', () => {
            const spiez = spyOnProperty(foop, 'value', 'set');
            foop.value = true;
            expect(spiez).toHaveBeenCalled();
        });
