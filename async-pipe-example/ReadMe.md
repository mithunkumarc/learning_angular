this example includes, async , jsonpipe and custom pipe

observable need not be subscribed is you use async pipe

The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.   
When a new value is emitted, the async pipe marks the component to be checked for changes.   
When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.  

