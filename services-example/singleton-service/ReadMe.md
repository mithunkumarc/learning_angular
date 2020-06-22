declare service in appmodule providers  

declare service Injectable providedIn : root  

dont inject service at component level (using provider)

service  

        import { Injectable } from '@angular/core';

        @Injectable({
          providedIn: 'root',
        })
        export class UserService {
        }

module  

          @NgModule({
            ...
            providers: [UserService],
            ...
          })
