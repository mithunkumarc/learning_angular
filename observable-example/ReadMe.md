Observables open up a continuous channel of communication in which multiple values of data can be emitted over time.   
From this we get a pattern of dealing with data by using array-like operations to parse, modify and maintain data.   
Angular uses observables extensively - you'll see them in the HTTP service and the event system.   

#### promise vs observable

promise automatically calls then() (when success)   

Often Observable is preferred over Promise because it provides the features of Promise and more.  

With Observable it doesn't matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case.   


#### In a nutshell, the main differences between a Promise and an Observable are as follows:

        a Promise is eager, whereas an Observable is lazy,
        a Promise is always asynchronous, while an Observable can be either synchronous or asynchronous,
        a Promise can provide a single value, whereas an Observable is a stream of values (from 0 to multiple values),
        you can apply RxJS operators to an Observable to get a new tailored stream.
