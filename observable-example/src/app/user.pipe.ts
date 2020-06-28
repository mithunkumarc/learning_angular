import {Pipe, PipeTransform} from '@angular/core';  
@Pipe ({  
  name : 'userpipe'  
})  
export class UserPipe implements PipeTransform {  
  transform(val : string) : object {  
    return JSON.parse(val);  
  }  
}  