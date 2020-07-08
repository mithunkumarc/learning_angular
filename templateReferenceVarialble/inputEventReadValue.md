html or template file

        <input 
          type="text" 
          (keyup.enter)="getvalue($event.target.value)" 
          #ip                                              <!-- ip template reference variable used to refer this input html dom -->
          placeholder="press enter after typing"
        />

component file

        getvalue(text: string) {
            if(text){
              console.log(text);
            } else {
              console.log("please type some text and press enter button")
            }
          }
