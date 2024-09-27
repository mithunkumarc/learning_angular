this example includes, async , jsonpipe and custom pipe

observable need not be subscribed is you use async pipe

The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.   
When a new value is emitted, the async pipe marks the component to be checked for changes.   
When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.  


### reading object field from observable using async pipe

    // entity
    export interface User {
      "userId": number,
      "id": number,
      "title": string,
      "body": string
    }
    
    // ts file
    data$!: Observable<User>;
    ngOnInit(): void {
      this.data$ = this.appService.getData();
    }

    // html file
    <div>{{data$ | async | json}}</div>
    <p *ngIf="(data$ | async) as t">title Value: {{ t.title }}</p>
