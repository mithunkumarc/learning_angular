there are two ways to test async function by forcing them to complete their (processing)time early

#### So if you are using setTimeouts, setInterval etc then use tick() and 
#### if you are using some promises, then you can use either tick() or flushMicrotasks(). 

#### macrotask : tick
#### microtask or macrotask : tick or flushMicrotask
