declare service in AppModule providers  

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


output : 

                hello service constructor
                hello comp :
                service running
                world comp :
                service running


if service injected at component level using provider, each component will have different copy of service. so there will be no singleton.
