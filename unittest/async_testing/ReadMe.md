async vs fakeAsync : 

> In almost all cases, they can be used interchangeably, but using fakeAsync()/tick() combo is preferred unless you need to make an XHR call, 
in which case you MUST use async()/whenStable() combo, as fakeAsync() does not support XHR calls.

async  : supports ajax calls(api call)  
fakeAsync : doesn't supports ajax call(you need to stub method/mock response)  
