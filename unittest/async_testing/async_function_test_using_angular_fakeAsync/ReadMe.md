fakeAsync : Wraps a function to be executed in the fakeAsync zone
1. microtasks are manually executed by calling flushMicrotasks(),
2. timers are synchronous, tick() simulates the asynchronous passage of time.


usage of fakeAsync : 

inside spec


        it("testing async function", fakeAsync(() => {      // you can see fakeAsync wrapped a function inside
                  // test function wrapper by fakeAsync
                  // testing logic
                  // verify
        }));
