1.  sending whole html dom and let compoent read value   

in template/html file

        <input type="text" #inputValue/>
        <button (click)="getvalueInput(inputValue)">get value</button>

in component.ts file

        getvalueInput(htmlElement: any) {
            console.log(htmlElement.value);
        }


2.  read value in template and send just value  


template file
                
        <input type="text" #ip/>
        <!-- read value here and send to component -->
        <button (click)="getvalueInput(ip.value)">get value</button>
        
component file

        getvalueInput(text: string) {
                console.log(text);
        }
