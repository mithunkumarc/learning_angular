fakeAsync : Wraps a function to be executed in the fakeAsync zone
1. microtasks are manually executed by calling flushMicrotasks(),
2. timers are synchronous, tick() simulates the asynchronous passage of time.
