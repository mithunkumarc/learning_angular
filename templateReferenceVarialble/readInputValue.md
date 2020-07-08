in template/html file

        <input type="text" #inputValue/>
        <button (click)="getvalueInput(inputValue)">get value</button>

in component.ts file

        getvalueInput(htmlElement: any) {
            console.log(htmlElement.value);
        }
